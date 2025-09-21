
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu){
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('hidden');
  });
}

window.addEventListener('DOMContentLoaded', ()=>{
  const search = document.getElementById('resourceSearch');
  const rows = document.querySelectorAll('[data-resource-row]');
  if (search){
    search.addEventListener('input', (e)=>{
      const q = e.target.value.toLowerCase();
      rows.forEach(r=>{
        const t = r.textContent.toLowerCase();
        r.classList.toggle('hidden', !t.includes(q));
      });
    });
  }
});
