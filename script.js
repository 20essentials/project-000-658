const $ = el => document.querySelector(el);
const $button = $('.am-button');
const $circle = $button.querySelector('.circle');

function moveCircle(e) {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  $circle.style.left = `${x}px`;
  $circle.style.top = `${y}px`;
}

$button.addEventListener('mouseenter', moveCircle);
$button.addEventListener('mouseout', moveCircle);
