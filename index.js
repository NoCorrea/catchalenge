const $catBlack=document.querySelector('.blackcat')
const $catWhite=document.querySelector('.whitecat')
const $catYellow=document.querySelector('.yellowcat')
const $threeCatsImg=document.querySelector('.threecats')

function movecatblack(){
    $threeCatsImg.innerHTML='<img src="images/blackcat.jfif" alt="imagem de gato preto" title="imagem gato preto">' 
    
    
}

function movecatwhite(){
    $threeCatsImg.innerHTML='<img src="images/whitecat.jfif" alt="imagem de gato branco" title="imagem gato branco">' 
    
}

function movecatyellow(){
    $threeCatsImg.innerHTML='<img src="images/yellowcat.jfif" alt="imagem de gato amarelo" title="imagem gato amarelo">' 
    
}

$catBlack.addEventListener('click', movecatblack)
$catWhite.addEventListener('click', movecatwhite)
$catYellow.addEventListener('click', movecatyellow)



