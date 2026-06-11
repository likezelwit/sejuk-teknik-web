// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  var isOpen = navLinks.classList.contains('active');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  }
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('nav')) {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  }
});

// FAQ Accordion
function toggleFaq(element) {
  var parent = element.parentElement;
  var isActive = parent.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(function(item) { item.classList.remove('active'); });
  if (!isActive) { parent.classList.add('active'); }
}

// Toggle Second Hand Section
function toggleSecondHand() {
  var section = document.getElementById('secondhandSection');
  var btn = document.getElementById('toggleSecondhand');
  section.classList.toggle('show');
  btn.classList.toggle('active');
  if (section.classList.contains('show')) {
    btn.innerHTML = '♻️ Sembunyikan Kondisi Second <span class="toggle-arrow">▼</span>';
  } else {
    btn.innerHTML = '♻️ Lihat Harga Kondisi Second <span class="toggle-arrow">▼</span>';
  }
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    if (targetId === '#') return;
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      var navHeight = document.querySelector('nav').offsetHeight;
      var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// Navbar scroll shadow
var navEl = document.querySelector('nav');
window.addEventListener('scroll', function() {
  navEl.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});
