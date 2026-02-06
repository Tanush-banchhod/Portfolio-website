# 📧 EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up)
2. Sign up for a **free account** (supports 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - Outlook
   - Yahoo
   - Or any other provider
4. Click **Connect Account** and follow the OAuth flow
5. Give your service a name (e.g., "Portfolio Gmail")
6. Copy your **Service ID** (e.g., `service_abc1234`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Settings:**
- **Template Name**: Portfolio Contact Form
- **From Name**: {{from_name}}
- **From Email**: portfolio@yourdomain.com (or use your email)
- **To Email**: tanushbanchhod@gmail.com
- **Subject**: New Contact from Portfolio - {{from_name}}

**Email Body Template:**
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><small>Sent from your portfolio website</small></p>
```

4. **Important**: Make sure the variable names match your form field names:
   - `{{from_name}}` → maps to `name="name"`
   - `{{from_email}}` → maps to `name="email"`
   - `{{message}}` → maps to `name="message"`

5. Copy your **Template ID** (e.g., `template_xyz5678`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `abcDEF123ghiJKL456`)
3. Copy it

## Step 5: Create Your Config File

1. Copy the template file:
   ```bash
   cp assets/js/emailjs-config.template.js assets/js/emailjs-config.js
   ```

2. Open `assets/js/emailjs-config.js` and replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abcDEF123ghiJKL456',    // Your actual Public Key
    SERVICE_ID: 'service_abc1234',       // Your Service ID
    TEMPLATE_ID: 'template_xyz5678'      // Your Template ID
};
```

## Step 6: Update HTML Form (Already Done!)

Your form fields must have these exact `name` attributes:

```html
<input type="text" name="name" />        <!-- Maps to {{from_name}} -->
<input type="email" name="email" />      <!-- Maps to {{from_email}} -->
<textarea name="message"></textarea>     <!-- Maps to {{message}} -->
```

✅ **This is already set up in your `index.html`!**

## Step 7: Test Your Form

1. Open your portfolio in a browser
2. Fill out the contact form
3. Click "Send Message"
4. You should see a success message
5. Check your email inbox for the message!

## 🔧 Troubleshooting

### Common Issues:

1. **"EmailJS not configured" error**
   - Make sure you replaced all three values in `emailjs-config.js`
   - Remove the quotes around YOUR_PUBLIC_KEY placeholders

2. **"Failed to send" error**
   - Check that your Service ID and Template ID are correct
   - Make sure your email service is connected and active
   - Check browser console for detailed error messages

3. **Not receiving emails**
   - Verify your email address in the template's "To Email" field
   - Check your spam folder
   - Verify your email service is connected in EmailJS dashboard

4. **CORS errors**
   - EmailJS works with `file://` protocol for testing
   - If issues persist, use a local server: `python3 -m http.server 8000`

## 📊 EmailJS Free Tier Limits

- ✅ 200 emails/month
- ✅ 2 email services
- ✅ Unlimited templates
- ✅ No credit card required

Perfect for portfolio websites!

## 🔐 Security Note

Your Public Key is safe to expose in client-side code. EmailJS implements:
- Rate limiting
- reCAPTCHA v3 (optional, can be enabled)
- Domain whitelist (optional)

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [API Reference](https://www.emailjs.com/docs/sdk/send-form/)

---

**Need Help?** Contact me at tanushbanchhod@gmail.com
