const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++ ){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);

    newImage.onclick = function(e){
        const newSrc = e.target.getAttribute('src');
        displayedImage.setAttribute('src', newSrc)
    }
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(e){
    const btnClass = e.target.getAttribute('class');

    btnClass === 'dark' ? btn.setAttribute('class', 'light') : btn.setAttribute('class', 'dark');



    console.log(btn.getAttribute('class'));

});