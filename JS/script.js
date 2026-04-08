const typing = document.getElementById("typingAnimation");
const word = ["Frontend Developer","Backend Developer","UX/Ui Designer","Youtuber"];
let isDeleting = false;
let i=0;
let j=0;
let currentWord = word[i];
function type(){
    if(!isDeleting && j<=currentWord.length){
        typing.textContent = currentWord.substring(0, j++);
        setTimeout(type, 120);
    } else if(isDeleting && j>=0){
        typing.textContent = currentWord.substring(0,j--);
        setTimeout(type,80)
    } else{
        if(!isDeleting){
            isDeleting = true;
            setTimeout(type, 30);
        } else{
            isDeleting = false;
            i = (i +1 ) % word.length;
            currentWord = word[i];
            setTimeout(type, 300)
        }
    }
}
type();

const toggleNight = document.getElementById("toggle-Night");
toggleNight.addEventListener('change',()=>{
    const modeIcon = document.getElementById("modeIcon");
    if(toggleNight.checked){
        document.body.classList.remove("dark-mode-off");
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        
    }else {
        document.body.classList.add("dark-mode-off");
        modeIcon.classList.add("fa-sun");
        modeIcon.classList.remove("fa-moon");

    }
})
