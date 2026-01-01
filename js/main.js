/**
 * LuxeNails Beauty Studio - Main JavaScript
 * GitHub Pages Static Version
 */

(function() {
  'use strict';

  // ========================================
  // DOM Ready
  // ========================================
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initDropdownMenus();
    initAnimations();
    initComingSoonPopups();
  });

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');

      // Toggle aria-expanded
      const isExpanded = this.classList.contains('active');
      this.setAttribute('aria-expanded', isExpanded);

      // Prevent body scroll when menu is open
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ========================================
  // Dropdown Menus (Mobile)
  // ========================================
  function initDropdownMenus() {
    const dropdownTriggers = document.querySelectorAll('.nav__item--has-dropdown > .nav__link');

    dropdownTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        // Only handle on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('open');
        }
      });
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          const menuToggle = document.querySelector('.menu-toggle');
          const nav = document.querySelector('.nav');

          if (menuToggle && nav) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
          }
        }
      });
    });
  }

  // ========================================
  // Header Scroll Effect
  // ========================================
  function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const currentScroll = window.pageYOffset;

          // Add shadow on scroll
          if (currentScroll > 50) {
            header.classList.add('header--scrolled');
          } else {
            header.classList.remove('header--scrolled');
          }

          // Hide/show header on scroll direction
          if (currentScroll > lastScroll && currentScroll > 200) {
            header.classList.add('header--hidden');
          } else {
            header.classList.remove('header--hidden');
          }

          lastScroll = currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    });
  }

  // ========================================
  // Scroll Animations
  // ========================================
  function initAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  // ========================================
  // Coming Soon Popups for Booking/Call
  // ========================================
  function initComingSoonPopups() {
    // Handle all booking-related links
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      // Check for booking links
      if (href.includes('#booking') || href.includes('Book') ||
          link.textContent.includes('Book') || link.textContent.includes('Programează')) {
        e.preventDefault();
        alert('Această funcție va fi adăugată în curând! / This feature will be added soon!');
        return;
      }

      // Check for call/tel links
      if (href.startsWith('tel:') || link.textContent.includes('Call')) {
        e.preventDefault();
        alert('Această funcție va fi adăugată în curând! / This feature will be added soon!');
        return;
      }
    });
  }

  // ========================================
  // Booking Integration Helper
  // ========================================
  window.AdellBeautyArt = {
    // Open booking in new window
    openBooking: function(url) {
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    },

    // Track booking click (for analytics)
    trackBookingClick: function(service) {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'booking_click', {
          'event_category': 'Booking',
          'event_label': service || 'General'
        });
      }
      console.log('Booking clicked:', service || 'General');
    }
  };

})();
