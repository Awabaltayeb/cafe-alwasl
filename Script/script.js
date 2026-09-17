// حركة واحدة بسيطة عند تحميل الصفحة: ظهور تدريجي لقسم "نبذة عنا"
document.addEventListener('DOMContentLoaded', () => {
  const about = document.querySelector('.about');
  if (!about) return;

  about.style.opacity = '0';
  about.style.transform = 'translateY(12px)';
  about.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

  requestAnimationFrame(() => {
    setTimeout(() => {
      about.style.opacity = '1';
      about.style.transform = 'translateY(0)';
    }, 200);
  });
});
