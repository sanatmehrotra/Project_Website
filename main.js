var challenges = document.querySelectorAll('.challenges')
var n = 0;
var child = 0;
function validate()
{
    n++;
    if(n==5)
    {
        n=0;
        challenges[child].classList.add('hide')
        child+=1
        challenges[child].classList.remove('hide')
    }
}