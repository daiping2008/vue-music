
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  const fontSize = window.innerWidth / 10
  html.fontSize = fontSize > 50 ? 50 : fontSize
})
