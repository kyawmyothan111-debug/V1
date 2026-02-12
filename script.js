const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const gif = document.getElementById('display-gif');
const music = document.getElementById('romantic-music');

let noCount = 0;
const noMessages = [
    "Are you sure? 🤨",
    "Really sure?? 😭",
    "Think again! 🌸",
    "I'll be very sad... 💔",
    "Don't do this to me! 🥺",
    "Last chance! 🌹"
];

// 1. Floating Hearts Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💜';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// 2. No Button Logic (Run away + Change text)
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    // စာသားပြောင်းမယ်
    if(noCount < noMessages.length) {
        mainText.innerText = noMessages[noCount];
        noCount++;
    }
    // Yes button ကို ကြီးလာစေမယ် (Subtle hint!)
    yesBtn.style.transform = `scale(${1 + noCount * 0.1})`;
});

// 3. Yes Button Logic
yesBtn.addEventListener('click', () => {
    mainText.innerText = "Happy Valentine's Day! My Love ❤️";
    subText.innerText = "You are my today and all of my tomorrows. \nI promise to love you forever ❤️";
    //"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",   
        //"https://media.giphy.com/media/l378khQxt68syiWJy/giphy.gif",   
    //"https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",       
    //"https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif",
    //"https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif",
    //"https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    //"https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",

    gif.src = "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
    
    noBtn.style.display = 'none';
    music.play(); // သီချင်းဖွင့်မယ်
    
    // အောင်မြင်ခြင်း အထိမ်းအမှတ် နှလုံးသားတွေအများကြီး ကြဲမယ်
    for(let i=0; i<50; i++) {
        setTimeout(createHeart, i * 50);
    }
});