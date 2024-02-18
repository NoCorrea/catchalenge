/*const $catBlack=document.querySelector=('#blackcat')*/

const $catWhite=document.querySelector=('#whitecat')
const $catYellow=document.querySelector=('#yellowcat')

const $threeCatsImage=document.querySelector=('#threecats')

let $catBlack='img1'

function movecatblack(){
    if ($catBlack=='img1')
    {$threeCatsImage.innerHTML='<img src="images/blackcat.jfif" alt=""></img>'}
}

/*$threeCatsImage.addEventListener('click',       ) criar novo evento para a imagem */
$catBlack.addEventListener('click', movecatblack)
$catWhite.addEventListener('click', movecatwhite)
$catYellow.addEventListener('click', movecatyellow)



