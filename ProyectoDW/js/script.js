function animateValue(obj, start, end, duration) {
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function() {
    animateValue(document.getElementById('visitas'), 0, 1000, 3000);
    animateValue(document.getElementById('logins'), 0, 355, 3000);
    animateValue(document.getElementById('registros'), 0, 99, 3000);
});