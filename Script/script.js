document.addEventListener('DOMContentLoaded', () => {

  // ---------- ظهور تدريجي لقسم "نبذة عنا" عند تحميل الصفحة ----------
  const about = document.querySelector('.about');
  if (about) {
    about.style.opacity = '0';
    about.style.transform = 'translateY(12px)';
    about.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    requestAnimationFrame(() => {
      setTimeout(() => {
        about.style.opacity = '1';
        about.style.transform = 'translateY(0)';
      }, 200);
    });
  }

  // ---------- قائمة التنقل على الموبايل ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // إغلاق القائمة تلقائياً بعد اختيار رابط (موبايل)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- تبديل تبويبات الأسعار ----------
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.pricing__list');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });

      panels.forEach(panel => {
        panel.hidden = panel.dataset.panel !== target;
      });
    });
  });

});
