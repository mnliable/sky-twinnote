# Sky Wyatt - Electronic Press Kit (EPK)

A modern, responsive electronic press kit website for Sky Wyatt, featuring music, photos, videos, and contact information.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Music Player**: Custom audio controls with progress bars and time display
- **Photo Gallery**: Lightbox-enabled image gallery with lazy loading
- **Video Integration**: YouTube video embeds for better performance
- **Contact Form**: Interactive contact form with validation
- **Smooth Navigation**: Smooth scrolling and mobile-friendly navigation
- **Performance Optimized**: Lazy loading, debounced events, and optimized assets

## Project Structure

```
sky-wyatte-epk/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Optimized images
├── videos/            # Video files (for reference)
├── PHOTOS/            # Original photo directory
├── README.md          # This file
└── package.json       # Dependencies (if using npm)
```

## Setup Instructions

### 1. Prerequisites
- Modern web browser
- Local web server (optional, for development)

### 2. Installation
1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your web browser

### 3. Development Server (Optional)
For the best development experience, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Adding Photos
1. Place your photos in the `images/` directory
2. Update the `photos` array in `js/main.js`
3. Ensure photos are optimized for web (recommended: max 1200px width, JPEG format)

### Updating Music
1. Place audio files in the root directory
2. Update the `src` attributes in `index.html`
3. Supported formats: MP3, WAV, M4A

### Changing Video Links
1. Replace the YouTube embed URLs in the videos section
2. Update video titles and descriptions as needed

### Branding
1. Update colors in `css/style.css` (search for `#667eea`)
2. Change fonts by updating the Google Fonts link in `index.html`
3. Update logo and branding elements

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Assets**: Compressed images and minified code
- **Debounced Events**: Scroll events are optimized for performance
- **CDN Resources**: External libraries loaded from CDN for faster loading

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## SEO Features

- Meta tags for description and keywords
- Semantic HTML structure
- Optimized image alt tags
- Clean URL structure

## Contact Information

For questions about this EPK or Sky Wyatt:
- **Email**: booking@skywyatt.com
- **Management**: Twin Note Music
- **Location**: Los Angeles, CA

## License

This project is proprietary and confidential. All rights reserved.

## Credits

- **Design & Development**: Twin Note Music
- **Photography**: [Photographer Name]
- **Music**: Sky Wyatt
- **Icons**: [Icon Source]
- **Fonts**: Google Fonts (Inter)

## Updates

### Version 1.0.0
- Initial EPK website
- Responsive design
- Music player functionality
- Photo gallery with lightbox
- Contact form
- Mobile navigation

## Support

For technical support or questions about this EPK website, please contact the development team at Twin Note Music.
