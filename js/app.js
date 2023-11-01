import {lerp} from './utils.js'

console.log(lerp);

const video = document.querySelector('video');

const videoSection = document.querySelector('#video');

window.addEventListener('scroll', ()=>{
            animateVideo()
})

function animateVideo(){
    let{bottom} = videoSection.getBoundingClientRect();
    let scale = 1 - ((bottom-window.innerHeight)*.0005)
    video.style.transform = `scale(${scale})`;
}