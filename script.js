const hamburger=document.getElementById('hamburger'),nav=document.getElementById('nav');
hamburger.addEventListener('click',()=>nav.classList.toggle('nav-open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('nav-open')));

const chips=document.querySelectorAll('.chip'), items=document.querySelectorAll('.portfolio article');
chips.forEach(c=>c.addEventListener('click',()=>{chips.forEach(x=>x.classList.remove('active'));c.classList.add('active');const f=c.dataset.filter;items.forEach(i=>i.style.display=f==='all'||i.dataset.cat===f?'':'none')}));

const modal=document.getElementById('modal'),modalTitle=document.getElementById('modalTitle');
document.querySelectorAll('.read').forEach(btn=>btn.addEventListener('click',()=>{modalTitle.textContent=btn.dataset.title;modal.classList.add('open')}));
document.getElementById('close').onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};

document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),email=document.getElementById('email').value.trim(),phone=document.getElementById('phone').value.trim(),type=document.getElementById('type').value,success=document.getElementById('success');if(!name||!email||!phone||!type){success.textContent='يرجى إكمال البيانات المطلوبة.';success.style.color='#ff6b91';return}if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){success.textContent='يرجى إدخال بريد إلكتروني صحيح.';success.style.color='#ff6b91';return}success.textContent='تم إرسال طلب الاستشارة بنجاح، سنتواصل معك قريبًا.';success.style.color='#20e5a1';e.target.reset()});

const toTop=document.getElementById('top');window.addEventListener('scroll',()=>toTop.classList.toggle('show',scrollY>400),{passive:true});toTop.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:600,easing:'ease-out',fill:'forwards'});obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.service,.portfolio article,.tutorials article,.offer,.package,.social-card,.contact').forEach(x=>obs.observe(x));