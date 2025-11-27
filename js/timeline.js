// simple script at bottom before </body>
document.querySelector('.lucide-play').addEventListener('click', () => {
  document.querySelector('.scene').style.animationPlayState = 'running';
  console.log('running lucidBtn play ')
  document.querySelector('.scene').classList.add('running');
//   document.querySelector('.scene::after').style.animationPlayState = 'running';
  document.querySelectorAll('*').forEach(el => el.style.animationPlayState = 'running');
});

document.querySelector('.lucide-pause').addEventListener('click', () => {
  document.querySelector('.scene').style.animationPlayState = 'paused';
//   document.querySelector('.scene::after').style.animationPlayState = 'paused';
  document.querySelector('.scene').classList.add('paused');

  console.log('running lucideBtn pause')
  document.querySelectorAll('*').forEach(el => el.style.animationPlayState = 'paused');
});

document.querySelector('.lucide-stop').addEventListener('click', () => {
  navigator.reload()
});

