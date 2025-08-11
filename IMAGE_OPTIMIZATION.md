# Image Optimization Guide for Sky Wyatt EPK

## Overview
This guide explains how to optimize images for the Sky Wyatt EPK website to ensure fast loading times and optimal user experience.

## Image Requirements

### Photo Gallery Images
- **Format**: JPEG (.jpg) for photos, PNG (.png) for graphics with transparency
- **Dimensions**: Maximum 1200px width, maintain aspect ratio
- **File Size**: Maximum 500KB per image
- **Quality**: 80-85% JPEG quality for optimal balance

### Music Cover Images
- **Format**: JPEG (.jpg)
- **Dimensions**: 400x400px (square format)
- **File Size**: Maximum 200KB per image
- **Quality**: 85% JPEG quality

### Hero Background Image
- **Format**: JPEG (.jpg)
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **File Size**: Maximum 800KB
- **Quality**: 80% JPEG quality

## Optimization Tools

### Online Tools
1. **TinyPNG** (https://tinypng.com/) - Free online compression
2. **Squoosh** (https://squoosh.app/) - Google's image optimization tool
3. **ImageOptim** (https://imageoptim.com/) - Mac app for batch optimization

### Command Line Tools
```bash
# Using ImageMagick
convert input.jpg -resize 1200x -quality 85 output.jpg

# Using sips (macOS built-in)
sips -Z 1200 input.jpg --out output.jpg
```

## Image Naming Convention
- **Photos**: `photo-1.jpg`, `photo-2.jpg`, etc.
- **Music Covers**: `music-cover-1.jpg`, `music-cover-2.jpg`, etc.
- **Hero Background**: `hero-bg.jpg`
- **Favicon**: `favicon.ico`

## Current Placeholder Images
The following placeholder images are currently in the `images/` directory:
- `photo-1.jpg` through `photo-6.jpg` - Photo gallery images
- `music-cover-1.jpg` through `music-cover-4.jpg` - Music cover images
- `hero-bg.jpg` - Hero section background
- `favicon.ico` - Website favicon

## Steps to Add Your Images

1. **Prepare Images**: Resize and optimize according to requirements above
2. **Replace Placeholders**: Replace the placeholder files in the `images/` directory
3. **Update JavaScript**: Modify the `photos` array in `js/main.js` if needed
4. **Test**: Ensure images load properly and lightbox works

## Performance Tips

- Use WebP format for modern browsers (with JPEG fallback)
- Implement lazy loading (already implemented in the website)
- Consider using responsive images with `srcset` for different screen sizes
- Compress images before uploading to reduce bandwidth usage

## Example Image Processing Workflow

```bash
# 1. Resize image to maximum width
convert original-photo.jpg -resize 1200x -quality 85 photo-1.jpg

# 2. Check file size
ls -lh photo-1.jpg

# 3. If still too large, reduce quality further
convert original-photo.jpg -resize 1200x -quality 75 photo-1.jpg
```

## Troubleshooting

### Common Issues
- **Images not loading**: Check file paths and permissions
- **Large file sizes**: Re-optimize with lower quality settings
- **Poor image quality**: Balance between file size and quality
- **Lightbox not working**: Ensure images are properly linked in JavaScript

### Testing
- Test website on different devices and screen sizes
- Check loading times with browser developer tools
- Verify lightbox functionality on all images
- Test responsive behavior on mobile devices
