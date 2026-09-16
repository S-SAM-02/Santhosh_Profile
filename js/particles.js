// Ambient gold particles — pure DOM, no libs
(function(){
  window.addEventListener('DOMContentLoaded', () => {
    const host = document.querySelector('.particles');
    if(!host) return;
    const count = window.innerWidth < 720 ? 18 : 36;
    for(let i=0;i<count;i++){
      const p = document.createElement('span');
      p.className = 'particle';
      const size = 2 + Math.random()*5;
      p.style.width = p.style.height = size + 'px';
      p.style.left = (Math.random()*100) + '%';
      p.style.animationDuration = (10 + Math.random()*16) + 's';
      p.style.animationDelay = (-Math.random()*20) + 's';
      p.style.opacity = (.35 + Math.random()*.55).toFixed(2);
      host.appendChild(p);
    }
  });
})();
