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

const toggleNights = document.querySelectorAll('.mode');
toggleNights.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        const modeIcons = document.querySelectorAll('.moon-icon');
        if(toggle.checked){
            document.body.classList.remove("dark-mode-off");
            modeIcons.forEach(modeIcon =>{
                modeIcon.classList.remove("fa-sun");
                modeIcon.classList.add("fa-moon");
            })
            toggleNights.forEach(togg =>{
                togg.checked = true;
            })
        } else {
            document.body.classList.add("dark-mode-off");
            modeIcons.forEach(modeIcon =>{
                modeIcon.classList.add("fa-sun");
                modeIcon.classList.remove("fa-moon");
            })
            toggleNights.forEach(togg =>{
                togg.checked = false;
            })
        }
    })
});

const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const navTitle = document.getElementById("navTitle");
menuIcon.addEventListener('click', ()=>{
    nav.classList.add("show");
    navTitle.classList.add("show");

});
const closeIcons = document.getElementById("closeIcon");
closeIcons.addEventListener("click",()=>{
    nav.classList.remove("show");
})

const iconJS = document.querySelector('.js');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('rotatejs');
        } else{
            entry.target.classList.remove('rotatejs');
        }
    });
})
observer.observe(iconJS);



