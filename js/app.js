/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// build the nav. add element a and li.
const navItems = ['Home', 'About Us', 'Service', 'Contact Us'];
navItems.forEach(myFunction);
function myFunction(item, index, arr) {
    const newLi = document.createElement('li');
    const newLink = document.createElement('a');
    const newNav = document.querySelector('ul');
    newLink.innerHTML = arr[index];
    newLi.appendChild(newLink);
    newNav.appendChild(newLi); 
    newLink.classList.add('menu__link'); 
    newNav.style.cssText = 'display: flex; flex-direction: row;justify-content: space-evenly; list-style-type:none'; 
};

const a = document.getElementsByTagName('a');
const section = document.getElementsByTagName('section');
// Scroll to section on link click
for (let i=0;i<a.length;i++){
    a[i].addEventListener('click',function(e){
    section[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    section[i].classList.add ('your-active-class'); 
    a[i].classList.add('active');
    })
// add scroll response. I used console.log(rect) then get the rect.top value is between -30 and 130 which shows the section is in viewport;
    window.addEventListener('scroll',function(e){
        const rect = section[i].getBoundingClientRect();
        // Add class 'active' to section when near top of viewport
        if(rect.top > -30 && rect.top < 130) {
            section[i].classList.add('your-active-class');
            a[i].classList.add('active');
        }
        else {
            section[i].classList.remove('your-active-class');
            a[i].classList.remove('active');
        }
        // 523px is the height of section
        rect.top = rect.top - 523;
    })
}








