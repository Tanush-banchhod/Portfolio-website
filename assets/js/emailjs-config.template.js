// ===================================
// EMAILJS CONFIGURATION TEMPLATE
// ===================================
// INSTRUCTIONS:
// 1. Copy this file and rename it to: emailjs-config.js
// 2. Replace the placeholder values below with your actual EmailJS credentials
// 3. Get your credentials from: https://dashboard.emailjs.com/
// 4. See EMAILJS_SETUP.md for detailed setup instructions

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // Replace with your EmailJS Public Key
    SERVICE_ID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID (e.g., Gmail, Outlook)
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'     // Replace with your EmailJS Template ID
};

// Initialize EmailJS when DOM is ready
(function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('✅ EmailJS initialized successfully');
    } else if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        console.warn('⚠️ EmailJS not configured. Please update credentials in emailjs-config.js');
    }
})();

// ===================================
// ENHANCED CONTACT FORM WITH EMAILJS
// ===================================
function enhanceContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Remove old event listeners by cloning
    const newForm = contactForm.cloneNode(true);
    contactForm.parentNode.replaceChild(newForm, contactForm);
    const form = document.getElementById('contactForm');
    const button = form.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check if EmailJS is configured
        if (typeof emailjs === 'undefined') {
            showFormMessage('EmailJS is not loaded. Please refresh the page and try again.', 'error');
            return;
        }
        
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            showFormMessage('Email service is not configured yet. Please email me directly at tanushbanchhod@gmail.com', 'error');
            console.error('⚠️ EmailJS not configured! Please update EMAILJS_CONFIG in emailjs-config.js');
            return;
        }
        
        // Disable submit button and show loading state
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        button.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="spinner">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="60" stroke-dashoffset="0" opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="4"/>
                </svg>
                Sending...
            </span>
        `;
        
        try {
            // Send email using EmailJS
            const response = await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                form
            );
            
            console.log('✅ Email sent successfully:', response);
            
            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon! 🎉', 'success');
            
            // Reset form
            form.reset();
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.disabled = false;
                button.style.cursor = 'pointer';
                button.innerHTML = originalButtonText;
            }, 2000);
            
        } catch (error) {
            console.error('❌ Email send failed:', error);
            
            // Show error message
            showFormMessage(
                'Oops! Something went wrong. Please try again or email me directly at tanushbanchhod@gmail.com', 
                'error'
            );
            
            // Re-enable button
            button.disabled = false;
            button.style.cursor = 'pointer';
            button.innerHTML = originalButtonText;
        }
    });
    
    // Add focus effects to form inputs
    const formInputs = form.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Show form feedback message
function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = message;
    
    // Add styles
    messageDiv.style.cssText = `
        margin-top: 1rem;
        padding: 1rem 1.25rem;
        border-radius: 8px;
        font-size: 0.95rem;
        line-height: 1.5;
        animation: slideInUp 0.3s ease;
        ${type === 'success' 
            ? 'background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981;' 
            : 'background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444;'}
    `;
    
    // Insert message after form
    const contactForm = document.getElementById('contactForm');
    if (contactForm && contactForm.parentElement) {
        contactForm.parentElement.appendChild(messageDiv);
        
        // Remove message after 7 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }, 7000);
    }
}

// Add animations to head
if (!document.getElementById('emailjs-animations')) {
    const style = document.createElement('style');
    style.id = 'emailjs-animations';
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOutDown {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
        .spinner {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
}

// Call enhanced contact form on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceContactForm);
} else {
    enhanceContactForm();
}
