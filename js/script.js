// Highlight active nav link based on current page
(function(){
  window.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a[data-page]').forEach(a => {
      if(a.dataset.page === path) a.classList.add('active');
    });
  });
})();
