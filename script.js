let videosledesEle = document.querySelectorAll(".video-slide")

console.log(videosledesEle)
videosledesEle.forEach((video)=>{

    video.addEventListener("click",videoclick)
    function videoclick(){
        console.log(video)
    video.classList.toggle("active")
    }
})