/* =====================================================================
   Alhousseiny Diallo — Security & IT Portfolio
   Minimal, dependency-free JS:
   1. Mobile nav toggle
   2. Scroll-reveal for sections/cards
   3. Copy-to-clipboard for email
   4. Auto year in footer
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Mobile nav toggle ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu when a link is tapped (mobile)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 2. Reduced-motion preference ---------- */
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- 3. Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".section__head, .card, .skill-group, .footer__inner"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- 4. Copy email ---------- */
  const copyBtn = document.getElementById("copy-email");
  const emailLink = document.getElementById("email-link");

  if (copyBtn && emailLink) {
    const email = emailLink.getAttribute("href").replace("mailto:", "");
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(email).then(
        function () {
          copyBtn.textContent = "Copied!";
          copyBtn.classList.add("copied");
          setTimeout(function () {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
          }, 1800);
        },
        function () {
          copyBtn.textContent = "Press Ctrl+C";
        }
      );
    });
  }

  /* ---------- 5. Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
