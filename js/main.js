// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Photo Gallery with Lightbox
class PhotoGallery {
    constructor() {
        this.photoGrid = document.getElementById('photoGrid');
        this.photos = [];
        this.init();
    }

    async init() {
        await this.loadPhotos();
        this.renderPhotos();
        this.setupLightbox();
    }

    async loadPhotos() {
        // Simulate loading photos from a directory
        // In a real implementation, you would load these from your server
        this.photos = [
            {
                src: 'images/photo-1.jpg',
                alt: 'Sky Wyatt performing live',
                caption: 'Live performance at The Roxy'
            },
            {
                src: 'images/photo-2.jpg',
                alt: 'Sky Wyatt in studio',
                caption: 'Recording session in the studio'
            },
            {
                src: 'images/photo-3.jpg',
                alt: 'Sky Wyatt portrait',
                caption: 'Professional headshot'
            },
            {
                src: 'images/photo-4.jpg',
                alt: 'Sky Wyatt on stage',
                caption: 'Concert performance'
            },
            {
                src: 'images/photo-5.jpg',
                alt: 'Sky Wyatt acoustic set',
                caption: 'Intimate acoustic performance'
            },
            {
                src: 'images/photo-6.jpg',
                alt: 'Sky Wyatt backstage',
                caption: 'Backstage preparation'
            }
        ];
    }

    renderPhotos() {
        if (!this.photoGrid) return;

        this.photoGrid.innerHTML = this.photos.map((photo, index) => `
            <div class="photo-item">
                <a href="${photo.src}" data-lightbox="gallery" data-title="${photo.caption}">
                    <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
                </a>
            </div>
        `).join('');
    }

    setupLightbox() {
        // Lightbox is already included via CDN
        // Additional customization can be added here
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'Image %1 of %2'
            });
        }
    }
}



// Audio Player Enhancement
class AudioPlayer {
    constructor() {
        this.audioElements = document.querySelectorAll('audio');
        this.init();
    }

    init() {
        this.audioElements.forEach(audio => {
            this.enhanceAudioPlayer(audio);
        });
    }

    enhanceAudioPlayer(audio) {
        // Create custom controls
        const audioContainer = audio.parentElement;
        const customControls = document.createElement('div');
        customControls.className = 'custom-audio-controls';
        
        // Add play/pause button
        const playButton = document.createElement('button');
        playButton.className = 'play-pause-btn';
        playButton.innerHTML = '▶';
        playButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playButton.innerHTML = '⏸';
            } else {
                audio.pause();
                playButton.innerHTML = '▶';
            }
        });
        
        // Add progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressBar.appendChild(progressFill);
        
        // Update progress
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${progress}%`;
        });
        
        // Click on progress bar to seek
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const seekTime = (clickX / width) * audio.duration;
            audio.currentTime = seekTime;
        });
        
        // Add time display
        const timeDisplay = document.createElement('div');
        timeDisplay.className = 'time-display';
        timeDisplay.textContent = '0:00 / 0:00';
        
        audio.addEventListener('loadedmetadata', () => {
            timeDisplay.textContent = `0:00 / ${this.formatTime(audio.duration)}`;
        });
        
        audio.addEventListener('timeupdate', () => {
            timeDisplay.textContent = `${this.formatTime(audio.currentTime)} / ${this.formatTime(audio.duration)}`;
        });
        
        // Assemble custom controls
        customControls.appendChild(playButton);
        customControls.appendChild(progressBar);
        customControls.appendChild(timeDisplay);
        
        // Replace default audio controls
        audio.style.display = 'none';
        audioContainer.appendChild(customControls);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

// Lazy Loading for Images
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PhotoGallery();
    new AudioPlayer();
    new LazyLoader();
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Add CSS for custom audio controls
    const style = document.createElement('style');
    style.textContent = `
        .custom-audio-controls {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 10px;
        }
        
        .play-pause-btn {
            background: #667eea;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .play-pause-btn:hover {
            background: #5a6fd8;
            transform: scale(1.1);
        }
        
        .progress-bar {
            flex: 1;
            height: 6px;
            background: #e1e5e9;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
        }
        
        .progress-fill {
            height: 100%;
            background: #667eea;
            border-radius: 3px;
            transition: width 0.1s ease;
        }
        
        .time-display {
            font-size: 12px;
            color: #666;
            min-width: 80px;
            text-align: center;
        }
        

    `;
    document.head.appendChild(style);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations or effects can go here
}, 10));

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'image-error';
            errorDiv.textContent = 'Image failed to load';
            errorDiv.style.cssText = 'padding: 20px; text-align: center; color: #999; background: #f5f5f5; border-radius: 8px;';
            img.parentNode.appendChild(errorDiv);
        });
    });
});
