const demo=document.getElementById('cobra-demo');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion(){if(reduced.matches){demo.pause();}else{demo.muted=true;demo.play().catch(()=>{});}}
syncMotion();reduced.addEventListener('change',syncMotion);
