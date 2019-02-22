let whiteButton = document.querySelector('.white_round')
let greyButton = document.querySelector('.grey_round')
let homepod = document.querySelector('.main__choice__imgs')

whiteButton.addEventListener(
  'click',
  function()
  {
    homepod.setAttribute('src','images/white-homepod.png')
  }
)

greyButton.addEventListener(
  'click',
  function()
  {
    homepod.setAttribute('src','images/black-homepod.png')

  }
)
