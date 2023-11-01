import {lerp} from './utils.js'

const video = document.querySelector('video');

const videoSection = document.querySelector('#video');

window.addEventListener('scroll', ()=>{
            animateVideo()
})

function animateVideo(){
    let{bottom} = videoSection.getBoundingClientRect();
    let scale = 1 - ((bottom-window.innerHeight)*.0005);
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale;
    video.style.transform = `scale(${scale})`;
}