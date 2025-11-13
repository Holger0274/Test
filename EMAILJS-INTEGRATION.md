# EmailJS Integration Anleitung

Diese Anleitung erklärt, wie Sie das Kontaktformular mit EmailJS verbinden, um E-Mails zu empfangen.

## Was ist EmailJS?

EmailJS ermöglicht es, E-Mails direkt aus dem Frontend zu versenden, ohne eigenen Backend-Server. Perfekt für statische Landing Pages!

**Kosten:** Kostenlos für bis zu 200 E-Mails/Monat

---

## Schritt-für-Schritt Anleitung

### 1. EmailJS Account erstellen

1. Gehe zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicke auf **"Sign Up"**
3. Erstelle einen Account (mit Google/GitHub oder E-Mail)
4. Bestätige deine E-Mail-Adresse

---

### 2. E-Mail-Service hinzufügen

1. Gehe zu [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Klicke auf **"Add New Service"**
3. Wähle deinen E-Mail-Provider:
   - **Gmail** (empfohlen für KMUs)
   - Outlook
   - Yahoo
   - Oder einen anderen Service
4. Verbinde dein E-Mail-Konto
5. **Kopiere die Service ID** (z.B. `service_abc123`)

> **Tipp:** Verwende eine Geschäfts-E-Mail-Adresse (kontakt@ai-mation.de), nicht eine persönliche.

---

### 3. E-Mail-Template erstellen

1. Gehe zu [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates)
2. Klicke auf **"Create New Template"**
3. Konfiguriere das Template:

#### Template-Einstellungen:

**To Email:**
```
kontakt@ai-mation.de
```
(Oder deine gewünschte Empfänger-Adresse)

**From Name:**
```
{{fullname}}
```

**From Email:**
```
{{email}}
```

**Subject:**
```
Neue KI-Potenzialanalyse Anfrage von {{fullname}} ({{company}})
```

**Message Body:**
```
Neue Anfrage über die AI.mation Landing Page:

═══════════════════════════════════════

📋 KONTAKTDATEN:

Name:        {{fullname}}
Firma:       {{company}}
E-Mail:      {{email}}

═══════════════════════════════════════

💬 NACHRICHT:

{{message}}

═══════════════════════════════════════

📅 Zeitstempel: {{reply_to}}

Bitte innerhalb von 24 Stunden antworten!
```

4. Klicke auf **"Save"**
5. **Kopiere die Template ID** (z.B. `template_xyz789`)

---

### 4. Public Key holen

1. Gehe zu [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
2. Scrolle zu **"API Keys"**
3. **Kopiere deinen Public Key** (z.B. `aBcDeFgHiJkLmNoPqRs`)

---

### 5. Code in index.html aktivieren

#### A) EmailJS SDK aktivieren

Öffne `index.html` und finde **Zeile 33-43**:

```html
<!-- EmailJS SDK - UNCOMMENT when ready to activate form submission -->
<!--
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        // Initialize EmailJS with your Public Key
        // Get your key from: https://dashboard.emailjs.com/admin/account
        emailjs.init("YOUR_PUBLIC_KEY_HERE");
    })();
</script>
-->
```

**Entferne die Kommentar-Zeichen** (`<!--` und `-->`) und **ersetze `YOUR_PUBLIC_KEY_HERE`**:

```html
<!-- EmailJS SDK - ACTIVATED -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("aBcDeFgHiJkLmNoPqRs");  // ← Dein Public Key hier einfügen
    })();
</script>
```

#### B) Formular-Code ersetzen

Finde **Zeile 1528-1554** im `<script>`-Bereich:

Ersetze diesen Abschnitt:

```javascript
// ============================================================================
// REPLACE THIS SECTION WITH EmailJS CODE (see instructions above)
// ============================================================================

// DEMO MODE: Show success message (no actual email sent)
const successMessage = document.getElementById('form-success');
successMessage.classList.remove('hidden');

// Disable form fields
leadForm.querySelectorAll('input, textarea, button[type="submit"]').forEach(el => {
    if (el.type !== 'submit') el.disabled = true;
    el.style.opacity = '0.5';
});

// Reset after 5 seconds (for demo purposes - REMOVE when using EmailJS)
setTimeout(() => {
    leadForm.reset();
    successMessage.classList.add('hidden');
    leadForm.querySelectorAll('input, textarea, button[type="submit"]').forEach(el => {
        el.disabled = false;
        el.style.opacity = '1';
    });
}, 5000);

console.log('Form data ready for backend:', { fullname, company, email, message });

// ============================================================================
```

Mit diesem Code:

```javascript
// ============================================================================
// EmailJS INTEGRATION - ACTIVATED
// ============================================================================

const successMessage = document.getElementById('form-success');

emailjs.send("service_abc123", "template_xyz789", {  // ← Deine IDs hier einfügen
    fullname: fullname,
    company: company,
    email: email,
    message: message,
    reply_to: email
})
.then(function(response) {
    console.log('✅ Email sent successfully!', response);

    // Show success message
    successMessage.classList.remove('hidden');

    // Disable form fields
    leadForm.querySelectorAll('input, textarea, button[type="submit"]').forEach(el => {
        if (el.type !== 'submit') el.disabled = true;
        el.style.opacity = '0.5';
    });

    // Optional: Reset form after 10 seconds
    setTimeout(() => {
        leadForm.reset();
        successMessage.classList.add('hidden');
        leadForm.querySelectorAll('input, textarea, button[type="submit"]').forEach(el => {
            el.disabled = false;
            el.style.opacity = '1';
        });
    }, 10000);

}, function(error) {
    console.error('❌ Email send failed:', error);
    alert('Fehler beim Senden der Nachricht. Bitte versuche es erneut oder kontaktiere uns direkt unter kontakt@ai-mation.de');
});

// ============================================================================
```

**Wichtig:** Ersetze:
- `"service_abc123"` → Deine **Service ID**
- `"template_xyz789"` → Deine **Template ID**

---

### 6. Testen

1. Öffne `index.html` im Browser
2. Scrolle zum Kontaktformular
3. Fülle alle Felder aus
4. Klicke auf **"GRATIS-ANALYSE ANFRAGEN"**
5. Überprüfe:
   - ✅ Erfolgs-Nachricht erscheint
   - ✅ E-Mail kommt in deinem Posteingang an
   - ✅ Keine Fehler in der Browser-Konsole (F12)

---

## Troubleshooting

### Problem: "emailjs is not defined"
**Lösung:** EmailJS SDK nicht aktiviert. Prüfe Schritt 5A.

### Problem: "Service ID or Template ID is invalid"
**Lösung:** Falsche IDs eingegeben. Kopiere sie erneut aus dem EmailJS Dashboard.

### Problem: E-Mails landen im Spam
**Lösung:**
1. Füge `no-reply@emailjs.com` zu deinen Kontakten hinzu
2. Verwende eine verifizierte Domain (z.B. Gmail mit echtem Namen)
3. Teste mit verschiedenen E-Mail-Providern

### Problem: "Daily quota exceeded"
**Lösung:** Free-Plan hat 200 E-Mails/Monat. Upgrade auf bezahlten Plan oder warte bis nächsten Monat.

---

## Alternative: Formspree

Falls EmailJS nicht funktioniert, kannst du **Formspree** verwenden:

1. Gehe zu [https://formspree.io/](https://formspree.io/)
2. Erstelle einen Account
3. Erstelle ein neues Formular
4. Ersetze `<form>` Tag:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="space-y-5">
```

5. Ändere Input-Namen (müssen übereinstimmen):
```html
<input name="name" ...>
<input name="company" ...>
<input name="email" ...>
<textarea name="message" ...></textarea>
```

6. Entferne das JavaScript `e.preventDefault()` für dieses Formular

---

## Produktivbetrieb-Checklist

Bevor du die Landing Page live schaltest:

- [ ] EmailJS Service verbunden
- [ ] Template erstellt und getestet
- [ ] Public Key in index.html eingefügt
- [ ] Service ID und Template ID in Code ersetzt
- [ ] Test-E-Mail erfolgreich versendet
- [ ] E-Mails kommen nicht im Spam an
- [ ] Auto-Antwort-E-Mail eingerichtet (optional)
- [ ] Benachrichtigungen aktiviert (EmailJS Dashboard)

---

## Support

Bei Fragen:
- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com
- AI.mation: kontakt@ai-mation.de

---

**Geschätzte Setup-Zeit:** 15-20 Minuten
