// Contact form — offline placeholder that opens mailto with prefilled body
(function(){
  window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.contact');
    if(!form) return;
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const msg = document.querySelector('.form-msg');
      if(!data.name || !data.email || !data.message){
        msg.textContent = 'Please fill in every field.'; return;
      }
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:rathasenthil194@gmail.com?subject=${subject}&body=${body}`;
      msg.textContent = 'Opening your mail app…';
      form.reset();
    });
  });
})();
