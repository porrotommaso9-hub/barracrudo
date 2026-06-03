// Shared nav logic — include on every page
(function(){
  const nav = document.getElementById('nav');
  const hbg = document.getElementById('hbg');
  const mob = document.getElementById('mobMenu');
  const scrollInd = document.getElementById('heroScroll');

  window.addEventListener('scroll',()=>{
    nav.classList.toggle('on', scrollY > 55);
    if(scrollInd && scrollY > 80) scrollInd.classList.add('gone');
  },{passive:true});

  hbg.addEventListener('click',()=>{
    hbg.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });
  mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    hbg.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow='';
  }));

  // Scroll reveal
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target);}});
  },{threshold:.1});
  document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });
})();
