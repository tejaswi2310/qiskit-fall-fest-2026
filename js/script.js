/**
 * Qiskit Fall Fest 2026 - Vanilla JavaScript
 * Pure ES6+ implementation with zero external dependencies
 */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. Quantum Background Network (HTML5 Canvas)
  // -------------------------------------------------------------------------
  const initQuantumBackground = () => {
    const canvas = document.getElementById("quantum-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic particle count based on screen width (max 65)
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? "#6D3BFF" : "#38BDF8",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between close particles (<130px)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(109, 59, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles with soft glow
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
  };

  initQuantumBackground();

  // -------------------------------------------------------------------------
  // 2. Sticky Navbar Blur & Shadow on Scroll
  // -------------------------------------------------------------------------
  const initStickyNavbar = () => {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  };

  initStickyNavbar();

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // -------------------------------------------------------------------------
  const initMobileMenu = () => {
    const menuBtn = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!menuBtn || !mobileDrawer) return;

    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains("open");
      if (isOpen) {
        mobileDrawer.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
        if (menuIcon) menuIcon.style.display = "none";
        if (closeIcon) closeIcon.style.display = "block";
      } else {
        mobileDrawer.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        if (menuIcon) menuIcon.style.display = "block";
        if (closeIcon) closeIcon.style.display = "none";
      }
    };

    menuBtn.addEventListener("click", () => toggleMenu());

    // Close menu when clicking any nav link inside drawer
    const mobileLinks = mobileDrawer.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        toggleMenu(false);
      }
    });
  };

  initMobileMenu();

  // -------------------------------------------------------------------------
  // 4. FAQ Accordion Interaction
  // -------------------------------------------------------------------------
  const initFaqAccordion = () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const toggleBtn = item.querySelector(".faq-toggle-btn");
      if (!toggleBtn) return;

      toggleBtn.addEventListener("click", () => {
        const isCurrentlyOpen = item.classList.contains("open");

        // Close all items
        faqItems.forEach((other) => {
          other.classList.remove("open");
          const otherBtn = other.querySelector(".faq-toggle-btn");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        });

        // Toggle current item if it wasn't open
        if (!isCurrentlyOpen) {
          item.classList.add("open");
          toggleBtn.setAttribute("aria-expanded", "true");
        }
      });
    });
  };

  initFaqAccordion();

  // -------------------------------------------------------------------------
  // 5. Back to Top Button
  // -------------------------------------------------------------------------
  const initBackToTop = () => {
    const backToTopBtn = document.getElementById("btn-back-to-top");
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  initBackToTop();
});
