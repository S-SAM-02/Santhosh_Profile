// Reveal on scroll, scroll progress, 3D tilt, rotating titles, count-up, cursor
(function(){
  window.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.querySelector('.loader');
    if(loader){ setTimeout(()=>loader.classList.add('hidden'), 900); }

    // Scroll progress
    const bar = document.querySelector('.scroll-progress');
    if(bar){
      const upd = () => {
        const h = document.documentElement;
        const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
        bar.style.width = pct + '%';
      };
      window.addEventListener('scroll', upd, {passive:true}); upd();
    }

    // Reveal
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
    }, {threshold: .12});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Rotating titles
    const rot = document.querySelector('.title-rotator');
    if(rot){
      const items = rot.querySelectorAll('span');
      let i = 0;
      items[0]?.classList.add('active');
      setInterval(()=>{
        items[i].classList.remove('active');
        items[i].classList.add('exit');
        setTimeout(()=>items[i].classList.remove('exit'), 600);
        i = (i+1) % items.length;
        items[i].classList.add('active');
      }, 2600);
    }

    // 3D tilt on profile frame
    const frame = document.querySelector('.profile-frame');
    if(frame){
      frame.addEventListener('mousemove', (e)=>{
        const r = frame.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - .5;
        const y = (e.clientY - r.top)/r.height - .5;
        frame.style.transform = `perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateZ(0)`;
      });
      frame.addEventListener('mouseleave', ()=> frame.style.transform = '');
    }

    // Skill rings — animate stroke on view
    document.querySelectorAll('.ring').forEach(ring => {
      const fg = ring.querySelector('.fg');
      const val = parseInt(ring.dataset.val || '80', 10);
      const R = 38; const C = 2*Math.PI*R;
      fg.setAttribute('r', R); fg.setAttribute('cx', 44); fg.setAttribute('cy', 44);
      fg.style.strokeDasharray = C;
      fg.style.strokeDashoffset = C;
      ring.querySelector('.bg').setAttribute('r', R);
      ring.querySelector('.bg').setAttribute('cx', 44);
      ring.querySelector('.bg').setAttribute('cy', 44);
      const io2 = new IntersectionObserver((es)=>{
        es.forEach(e => {
          if(e.isIntersecting){
            fg.style.strokeDashoffset = C * (1 - val/100);
            let n = 0;
            const step = Math.max(1, Math.round(val/40));
            const t = setInterval(()=>{ n = Math.min(val, n+step); ring.querySelector('.val').textContent = n + '%'; if(n>=val) clearInterval(t); }, 24);
            io2.unobserve(ring);
          }
        });
      }, {threshold: .5});
      io2.observe(ring);
    });

    // Magnetic cursor
    if(matchMedia('(hover: hover)').matches){
      const c = document.createElement('div'); c.className='cursor'; document.body.appendChild(c);
      const d = document.createElement('div'); d.className='cursor dot'; document.body.appendChild(d);
      window.addEventListener('mousemove', (e)=>{
        c.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
        d.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      });
      document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', ()=> c.style.width = c.style.height = '46px');
        el.addEventListener('mouseleave', ()=> c.style.width = c.style.height = '22px');
      });
    }
  });
})();
