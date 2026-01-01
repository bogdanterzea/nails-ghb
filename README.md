# LuxeNails Beauty Studio - GitHub Pages Website

A beautiful, responsive static website for LuxeNails Beauty Studio nail salon, designed for hosting on GitHub Pages.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Customization](#customization)
- [Booking Integration](#booking-integration)
- [Browser Support](#browser-support)

---

## Features

- **Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **Modern Design** - Elegant, feminine aesthetic with soft blush and gold accents
- **Fast Loading** - Pure HTML, CSS, and JavaScript (no frameworks required)
- **SEO Friendly** - Semantic HTML with meta tags for search engine optimization
- **Accessible** - WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Easy to Customize** - CSS custom properties (variables) for easy theming

---

## Project Structure

```
nails-ghbhst/
├── index.html              # Homepage
├── about.html              # About Us page
├── contact.html            # Contact & Booking page
├── css/
│   └── styles.css          # Main stylesheet with design tokens
├── js/
│   └── main.js             # JavaScript for interactivity
├── services/
│   ├── manicure.html       # Manicure services page
│   ├── pedicure.html       # Pedicure services page
│   ├── gel-acrylic.html    # Gel & Acrylic page
│   └── nail-art.html       # Nail Art page
├── images/                 # Image assets folder (create as needed)
│   └── favicon.svg         # Site favicon (create or add)
├── .gitignore              # Git ignore file
└── README.md               # This file
```

---

## Getting Started

### Prerequisites

- A GitHub account
- Git installed on your computer (optional for local development)
- A text editor (VS Code, Sublime Text, etc.)

### Local Development

1. **Clone or download this repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nails-ghbhst.git
   cd nails-ghbhst
   ```

2. **Open in your browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for best results):
     ```bash
     # Using Python 3
     python3 -m http.server 8000

     # Using Node.js (npx)
     npx serve
     ```
   - Then visit `http://localhost:8000`

3. **Edit files:**
   - Modify HTML files to update content
   - Edit `css/styles.css` to change styles
   - Update `js/main.js` for functionality changes

---

## Deploying to GitHub Pages

### Method 1: GitHub Web Interface (Easiest)

1. **Create a new GitHub repository:**
   - Go to [github.com/new](https://github.com/new)
   - Name it `nails-ghbhst` (or any name you prefer)
   - Make it **Public**
   - Click "Create repository"

2. **Upload files:**
   - Click "uploading an existing file"
   - Drag and drop all project files
   - Click "Commit changes"

3. **Enable GitHub Pages:**
   - Go to repository **Settings**
   - Click **Pages** in the left sidebar
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your site:**
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://YOUR_USERNAME.github.io/nails-ghbhst/`

### Method 2: Git Command Line

1. **Initialize and push:**
   ```bash
   cd nails-ghbhst
   git init
   git add .
   git commit -m "Initial commit - LuxeNails Beauty Studio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nails-ghbhst.git
   git push -u origin main
   ```

2. **Enable GitHub Pages** (same as Method 1, step 3)

### Using a Custom Domain (Optional)

1. **Add CNAME file:**
   Create a file named `CNAME` in the root with your domain:
   ```
   www.luxenails.com
   ```

2. **Configure DNS:**
   Add these records at your domain registrar:
   - **A Records** pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME Record**: `www` pointing to `YOUR_USERNAME.github.io`

3. **Enable in Settings:**
   - Go to repository Settings > Pages
   - Enter your custom domain
   - Check "Enforce HTTPS"

---

## Customization

### Changing Colors

Edit the CSS custom properties in `css/styles.css`:

```css
:root {
  /* Main Colors */
  --color-primary: #F5E1DA;      /* Soft Blush - main background */
  --color-accent: #D4AF37;       /* Gold - buttons, highlights */
  --color-secondary: #FFB6C1;    /* Light Pink - decorative */

  /* Text Colors */
  --color-text: #2F2F2F;         /* Main text */
  --color-text-light: #6C757D;   /* Secondary text */
}
```

### Changing Fonts

The site uses Google Fonts. To change fonts:

1. Visit [fonts.google.com](https://fonts.google.com)
2. Select your fonts
3. Update the `<link>` tag in each HTML file
4. Update CSS variables:
   ```css
   :root {
     --font-heading: 'Your Heading Font', serif;
     --font-body: 'Your Body Font', sans-serif;
   }
   ```

### Adding Images

1. Create an `images/` folder if not exists
2. Add your images (JPG, PNG, WebP recommended)
3. Reference in HTML:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Updating Business Information

Search and replace these placeholders throughout the HTML files:

- `LuxeNails Beauty Studio` - Your salon name
- `123 Elegant Avenue, Suite 200` - Your address
- `New York, NY 10001` - Your city/state/zip
- `(212) 555-LUXE` - Your phone number
- `hello@luxenails.studio` - Your email
- Social media URLs

---

## Booking Integration

Since GitHub Pages only hosts static files, you'll need an external booking service. Here are recommended options:

### Recommended Booking Platforms

| Platform | Price | Best For |
|----------|-------|----------|
| **Fresha** | Free | All-in-one solution with marketplace |
| **Square Appointments** | $29/mo | Integrated payments |
| **Vagaro** | $30/mo | Multi-location support |
| **SimplyBook.me** | Free tier | Budget-friendly |
| **Calendly** | Free tier | Simple scheduling |

### Integration Methods

#### Option 1: Link to External Booking Page
Replace the booking button link:
```html
<a href="https://yoursalon.fresha.com" target="_blank" class="btn btn--primary">
  Book Now
</a>
```

#### Option 2: Embed Booking Widget
Most platforms provide embeddable widgets. Add to your contact page:
```html
<!-- Example: Fresha widget -->
<div id="fresha-widget">
  <script src="https://widget.fresha.com/embed/12345" async></script>
</div>
```

#### Option 3: Use a Form Service
Use Formspree, Netlify Forms, or Google Forms:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="tel" name="phone" placeholder="Phone">
  <select name="service">
    <option>Manicure</option>
    <option>Pedicure</option>
    <option>Gel Nails</option>
    <option>Nail Art</option>
  </select>
  <button type="submit">Request Booking</button>
</form>
```

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari 13+
- Android Chrome

---

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images with tools like TinyPNG
   - Use appropriate image sizes (don't upload 4000px images)

2. **Enable GitHub Pages HTTPS:**
   - Always use HTTPS for better SEO and security

3. **Add a Favicon:**
   - Create `images/favicon.svg` or `favicon.ico`
   - Already linked in HTML files

---

## Troubleshooting

### Site not loading after deployment
- Wait 5-10 minutes for initial deployment
- Check Settings > Pages for deployment status
- Ensure `index.html` is in the root folder

### Styles not appearing
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check file paths are correct (case-sensitive on GitHub)

### Images not showing
- Verify file paths match exactly (case-sensitive)
- Ensure images are committed to the repository

### 404 errors on pages
- Check that all HTML files are in correct locations
- Verify links in navigation match file names

---

## Support

For issues with:
- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/pages)
- **Booking platforms**: Contact your chosen platform's support
- **Customization**: Consult a web developer

---

## License

This project is provided for personal/commercial use. Feel free to modify and use for your nail salon or beauty business.

---

## Credits

- **Fonts**: [Google Fonts](https://fonts.google.com) (Playfair Display, Inter)
- **Design**: Inspired by modern luxury salon aesthetics
- **Icons**: Unicode emoji characters (cross-browser compatible)

---

**Made with love for LuxeNails Beauty Studio**
