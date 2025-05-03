document.addEventListener("DOMContentLoaded", () => {
    // ========== FORM VALIDATION ==========
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = contactForm.querySelector("input[type='text']");
        const email = contactForm.querySelector("input[type='email']");
        const message = contactForm.querySelector("textarea");
  
        let isValid = true;
        clearErrors();
  
        if (name.value.trim() === "") {
          showError(name, "Name is required.");
          isValid = false;
        }
  
        if (!validateEmail(email.value)) {
          showError(email, "Enter a valid email.");
          isValid = false;
        }
  
        if (message.value.trim().length < 10) {
          showError(message, "Message must be at least 10 characters.");
          isValid = false;
        }
  
        if (isValid) {
          alert("Thank you for your message! We'll get back to you soon.");
          contactForm.reset();
        }
      });
  
      function showError(field, message) {
        const error = document.createElement("span");
        error.className = "form-error";
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
        field.classList.add("error");
      
        // Remove the error message after 3 seconds
        setTimeout(() => {
          error.remove();
          field.classList.remove("error");
        }, 3000);
      }
      
  
      function clearErrors() {
        document.querySelectorAll(".form-error").forEach((el) => el.remove());
        document.querySelectorAll(".error").forEach((el) =>
          el.classList.remove("error")
        );
      }
  
      function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
    }
  
    //  BUTTON & CARD HOVER ANIMATION
    const buttons = document.querySelectorAll("button, .card");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.classList.add("hovered");
      });
      btn.addEventListener("mouseleave", () => {
        btn.classList.remove("hovered");
      });
    });
  
    // SCROLL-BASED ANIMATION 
    const animatedElements = document.querySelectorAll(".card, .hero, .products");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    animatedElements.forEach((el) => observer.observe(el));
  
    //  OPTIONAL DARK MODE TOGGLE
    
    const darkToggle = document.getElementById("darkModeToggle");
    if (darkToggle) {
      darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }

    // Back to Top Functionality
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
    });

    backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
   // toggle handling
   const toggleBtn = document.querySelector('.menu-toggle');
   const navLinks = document.querySelector('.nav-links');
 
   toggleBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
   });

   // manage cart
   const cartCountElement = document.querySelector(".cart-count");
  let cartCount = 0;

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartCountElement.textContent = cartCount;
    });
  });
  });
  