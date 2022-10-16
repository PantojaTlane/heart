function createHeart(){

    const heart =  document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    if(Math.random() > 0.5){
        heart.style.color = "#c40333";
    }else{
        heart.style.color = "#fff";
    }


    heart.innerText = '❤'; 

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart, 300);