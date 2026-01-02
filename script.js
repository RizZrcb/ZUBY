// subtle random animation delay for punchlines
document.querySelectorAll('.punchlines span').forEach(el => {
  el.style.animationDelay = `${Math.random() * 4}s`;
});
