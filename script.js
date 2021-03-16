let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
console.log(document.body.scrollHeight);
console.log(window.innerHeight);
console.log(totalHeight);
window.onscroll = function(){
    let progressHeight = (window.pageYOffset/totalHeight)*100;
    progress.style.height=progressHeight+"%";
    console.log(progressHeight);
}