
// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });
}

// Prefill service from query string on contacto.html
const params = new URLSearchParams(window.location.search);
const service = params.get('service');
const servicioSelect = document.getElementById('servicio');
if (service && servicioSelect){
  [...servicioSelect.options].forEach(opt=>{
    if(opt.value.toLowerCase() === service.toLowerCase()){ opt.selected = true; }
  });
}

// Build WhatsApp link with form data
const waLink = document.getElementById('waLink');
const form = document.getElementById('bookingForm');
function buildWaUrl(){
  if(!form || !waLink) return;
  const nombre = encodeURIComponent(form.nombre?.value || '');
  const telefono = encodeURIComponent(form.telefono?.value || '');
  const correo = encodeURIComponent(form.correo?.value || '');
  const serv = encodeURIComponent(form.servicio?.value || '');
  const fecha = encodeURIComponent(form.fecha?.value || '');
  const hora = encodeURIComponent(form.hora?.value || '');
  const comentarios = encodeURIComponent(form.comentarios?.value || '');
  const text = `Hola, deseo una cita.\nNombre: ${nombre}\nTel: ${telefono}\nCorreo: ${correo}\nServicio: ${serv}\nFecha: ${fecha} ${hora}\nComentarios: ${comentarios}`;
  waLink.href = `https://wa.me/xxxx?text=${text}`;
}
if (form){
  form.addEventListener('input', buildWaUrl);
  buildWaUrl();
}
