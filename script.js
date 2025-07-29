AOS.init({ once: false });

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; 
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const toggleButton = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('mobile-sidebar');

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });