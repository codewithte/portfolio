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
const barPercent = document.querySelector('.skill-container');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            if(entry.target.classList.contains('skill-container')){
                const animations = document.querySelectorAll('.bar-percentage');
                animations.forEach(Animation =>{
                    Animation.classList.add('animation');
                })
            } else if(entry.target.classList.contains('js')){
                entry.target.classList.add('rotatejs');
            }
        } else{
            entry.target.classList.remove('rotatejs');
        }
    });
}, {threshold: 0.5})
observer.observe(iconJS);
observer.observe(barPercent);   


//Generate Project
const project = [
    {title:"CRUD Form",img:"crudForm.png",Des:"POS System with create, update, delete, add",lang:["Boostrap","Javascript"], linkCode: "https://github.com/codewithte/CRUD_Form", linkDemo: "https://crud-form-beta.vercel.app/"},
    {title:"E-Commerce",img:"shop.png",Des:"E-Commerce platform: Selling Product",lang:["HTML","CSS"], linkCode: "https://github.com/codewithte/TeTech", linkDemo: "https://codewithte.github.io/TeTech/"},
    {title:"Form",img:"crudForm.png",Des:"POS System with create, update, delete, add",lang:["Boostrap","Javascript","Angular"], linkCode: "https://github.com/codewithte/CRUD_Form", linkDemo: "https://crud-form-beta.vercel.app/"},
    {title:"Form",img:"crudForm.png",Des:"POS System with create, update, delete, add",lang:["Boostrap","Javascript","Angular"], linkCode: "https://github.com/codewithte/CRUD_Form", linkDemo: "https://crud-form-beta.vercel.app/"}
];
const projectContainer = document.querySelector('.project-container');
project.forEach(p=>{
    const project = document.createElement("div");
    project.classList.add('project');
    const lang = p.lang.map(language => `<span>${language}</span>`).join("");

    project.innerHTML = `
        <div class="pic"><img src="images/project/${p.img}"></div>
        <div class="projectDetail">
            <div class="projectTitle">${p.title}</div>
            <div class="projectDes">${p.Des}</div>
            <div class="projectLang">
                ${lang}
            </div>
            <div class="projectBtn">
                <a href="${p.linkCode}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github"></i>Code
                </a>
                <a href="${p.linkDemo}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-circle-play"></i>Live Demo
                </a>
            </div>
        </div>
        </div>
    `;
    projectContainer.appendChild(project);
})

const skills = [
    {lang:"HTML",img:"html.png", percent:"75%", color:'barColor1'},
    {lang:"CSS",img:"css.png", percent:"65%", color:'barColor2'},
    {lang:"Javascript",img:"js.png", percent:"45%", color:'barColor3'},
    {lang:"Typescript",img:"ts.png", percent:"10%", color:'barColor4'},
    {lang:"Angular",img:"angular.png", percent:"8%", color:'barColor5'},
    {lang:"Vite",img:"Vite.png", percent:"0%", color:'barColor6'},
    {lang:"Tailwinds",img:"tailwind.png", percent:"20%", color:'barColor7'},
    {lang:"React",img:"react.png", percent:"2%", color:'barColor8'}
];
const skillContainer = document.querySelector('.skill-container');
skills.forEach(skill=>{
    const container = document.createElement('div');
    container.innerHTML=`
        <div class="header-skill">
            <div class="logo-skill"><img src="images/skill-logo/${skill.img}"></div>
            <div class="text-skill">${skill.lang}</div>
        </div>
        <div class="body-skill" style="--percent: ${skill.percent};">
            <div class="skill-bar">
                <div class="proficiency">Proficiency</div>
                <div class="percentage" >${skill.percent}</div>
            </div>
            <div class="bar-percentage ${skill.color}"></div>
        </div>
    `;
    skillContainer.appendChild(container);
})









