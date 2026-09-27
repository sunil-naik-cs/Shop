/**
 * Shirali Coastal Traders & Services - Client Script
 * Local Business Website for Shirali, Karnataka
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current IST Business Open/Close Status
  function updateBusinessStatus() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const statusSub = document.getElementById('status-sub');
    if (!statusText) return;

    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + (5.5 * 3600000));
    
    const day = istTime.getDay(); // 0 = Sunday
    const hour = istTime.getHours() + (istTime.getMinutes() / 60);

    let isOpen = false;
    let nextText = '';

    if (day === 0) {
      // Sunday: 9:00 AM to 2:00 PM
      if (hour >= 9.0 && hour < 14.0) {
        isOpen = true;
        nextText = 'Closes today at 2:00 PM';
      } else if (hour < 9.0) {
        nextText = 'Opens today at 9:00 AM';
      } else {
        nextText = 'Reopens Monday at 8:30 AM';
      }
    } else {
      // Monday - Saturday: 8:30 AM to 8:30 PM
      if (hour >= 8.5 && hour < 20.5) {
        isOpen = true;
        nextText = 'Closes today at 8:30 PM';
      } else if (hour < 8.5) {
        nextText = 'Opens today at 8:30 AM';
      } else {
        nextText = (day === 6) ? 'Reopens Sunday at 9:00 AM' : 'Reopens tomorrow at 8:30 AM';
      }
    }

    if (isOpen) {
      statusText.textContent = 'Open Now';
      if (statusDot) statusDot.className = 'status-dot open';
    } else {
      statusText.textContent = 'Closed Now';
      if (statusDot) statusDot.className = 'status-dot closed';
    }
    if (statusSub) statusSub.textContent = nextText;
  }

  updateBusinessStatus();

  // 2. Address Copy to Clipboard
  const copyBtn = document.getElementById('copy-address-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const address = "Main Temple Road, Near Shri Chitrapur Math, Shirali, Karnataka - 581354";
      navigator.clipboard.writeText(address).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy Address';
        }, 2000);
      });
    });
  }

  // 3. Simple Contact Form Interactive Handler
  const contactForm = document.getElementById('local-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = '<p class="success-message">Thank you for your inquiry. Our store in Shirali will contact you shortly.</p>';
        contactForm.reset();
      }
    });
  }
});
