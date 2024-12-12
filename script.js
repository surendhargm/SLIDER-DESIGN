let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
   
    next.disabled = true;
    slide.appendChild(items[0]);
    setTimeout(() => (next.disabled = false), 300); 
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
   
    prev.disabled = true;
    slide.prepend(items[items.length - 1]);
    setTimeout(() => (prev.disabled = false), 300); 
});


document.querySelector('.slide').style.transition = 'transform 0.3s ease-in-out';
