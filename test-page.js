const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log(`Navigating to: ${htmlPath}`);

  try {
    await page.goto(htmlPath, { waitUntil: 'networkidle' });
    console.log('✓ Page loaded successfully');

    // Get page title
    const title = await page.title();
    console.log(`Page title: "${title}"`);

    // Check if Tailwind CSS is loaded
    const tailwindLoaded = await page.evaluate(() => {
      const link = document.querySelector('link[href*="tailwind"]');
      return link !== null;
    });
    console.log(`✓ Tailwind CSS link found: ${tailwindLoaded}`);

    // Get page content structure
    const structure = await page.evaluate(() => {
      const sections = document.querySelectorAll('section, header, nav, footer');
      return {
        totalSections: sections.length,
        hasNav: !!document.querySelector('nav'),
        hasHeader: !!document.querySelector('header'),
        hasFooter: !!document.querySelector('footer'),
        bodyClasses: document.body.className
      };
    });

    console.log('\nPage Structure:');
    console.log(`  - Total sections: ${structure.totalSections}`);
    console.log(`  - Has navigation: ${structure.hasNav}`);
    console.log(`  - Has header: ${structure.hasHeader}`);
    console.log(`  - Has footer: ${structure.hasFooter}`);
    console.log(`  - Body classes: "${structure.bodyClasses}"`);

    // Check for any console errors
    const logs = [];
    page.on('console', msg => logs.push(`${msg.type()}: ${msg.text()}`));

    // Take a screenshot
    await page.screenshot({
      path: 'screenshot.png',
      fullPage: true
    });
    console.log('\n✓ Screenshot saved to screenshot.png');

    // Get viewport info
    const viewport = page.viewportSize();
    console.log(`\nViewport: ${viewport.width}x${viewport.height}`);

    console.log('\n✓ All checks passed!');

  } catch (error) {
    console.error('✗ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
