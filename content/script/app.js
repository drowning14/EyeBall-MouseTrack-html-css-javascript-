const $ = document;
const eyeBall = $.querySelector('#eyeBall');

$.onmousemove = (event) => {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
    
    eyeBall.style.transition = "0s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
}

$.onmouseout = (event) => {
    eyeBall.style.transition = "0.7s";
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
}