function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 50 + 'vh';
    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2000);
}

function startFireworks() {
    const intervalId = setInterval(createFirework, 500);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 20000); // 持续20秒
}

window.addEventListener('load', startFireworks);
