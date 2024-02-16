var btn = document.getElementsByClassName('.next');
// console.log(btn)
var containers = document.querySelectorAll('.container')

var images = document.querySelectorAll('.banner-image')
console.log(images)

var n = 0;

// btn.addEventListener('click', ()=> {
//     console.log(containers)
//     containers[n].classList.add("hide")
//     n += 1
//     containers[n].classList.remove("hide")
// })

function change(e)
{
    if(n == containers.length-1)
    {
        location.href = 'tracker.html' //CREATE A nextPage.html FILE
    }
    // console.log(containers)
    containers[n].classList.add("hide")
    n += 1
    containers[n].classList.remove("hide")
    
}