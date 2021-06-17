function menuToggle () {
  const x = document.getElementById('myNavtoggle')
  if (x.className === 'right-nav') {
    x.className += ' responsive'
  } else {
    x.className = 'right-nav'
  }
}
