/* ============================================================
   THE KEPT WOMAN — Mobile Nav Toggle Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.getElementById('tkw-mobile-nav');
  var closeBtn = document.getElementById('tkw-mobile-nav-close');
  if (!toggle || !drawer) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    drawer.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.style.transform = 'translateX(-100%)';
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });
});
