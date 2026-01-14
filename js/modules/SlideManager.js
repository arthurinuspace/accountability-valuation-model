class SlideManager {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideParams = document.getElementById('slideParams');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }

    init() {
        this.updateSlide();
        this.addEventListeners();
    }

    updateSlide() {
        // Toggle active class
        this.slides.forEach((slide, index) => {
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update counter
        if (this.slideParams) {
            this.slideParams.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
        }

        // Button states
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 0;
            this.prevBtn.style.opacity = this.currentSlide === 0 ? '0.3' : '1';
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
            this.nextBtn.style.opacity = this.currentSlide === this.totalSlides - 1 ? '0.3' : '1';
        }
    }

    goToNext() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
        }
    }

    goToPrev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
        }
    }

    addEventListeners() {
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.goToNext());
        }
        
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.goToPrev());
        }

        // Keyboard support: Add PageUp/Down, Enter
        document.addEventListener('keydown', (e) => {
            const key = e.key;
            if (key === 'ArrowRight' || key === 'ArrowDown' || key === ' ' || key === 'Enter' || key === 'PageDown') {
                this.goToNext();
            } else if (key === 'ArrowLeft' || key === 'ArrowUp' || key === 'PageUp') {
                this.goToPrev();
            }
        });

        // Mouse Click support
        document.addEventListener('click', (e) => {
            // Ignore if clicking on buttons or controls
            if (e.target.closest('button') || e.target.closest('.controls')) return;
            
            // Left click to next
            this.goToNext();
        });

        // Right Click to Next (User Request)
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Prevent context menu
            this.goToNext(); // Go to next slide
        });
    }
}
