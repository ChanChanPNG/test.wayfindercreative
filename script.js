const $=id=>document.getElementById(id);
$('year').textContent=new Date().getFullYear();
$('menu').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));
let presses=0;
$('test-button').addEventListener('click',()=>{presses++;$('button-result').textContent=presses===1?'It works. Shocking, we know.':`Button survived ${presses} clicks. Impressive.`});
$('theme-button').addEventListener('click',()=>{const light=document.body.classList.toggle('light');$('theme-result').textContent=light?'Light mode. Bold choice.':'Dark mode. Welcome back.'});
$('device-button').addEventListener('click',()=>{$('device-result').textContent=`${window.innerWidth} × ${window.innerHeight} px · ${navigator.language} · ${navigator.onLine?'Online':'Offline'}`});
function refresh(){const now=new Date();$('clock').textContent=now.toLocaleTimeString();$('viewport').textContent=`${window.innerWidth} × ${window.innerHeight}`};refresh();setInterval(refresh,1000);window.addEventListener('resize',refresh);
