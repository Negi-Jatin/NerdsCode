let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let link4 = document.getElementById('link4');

let link5 = document.getElementById('link5');
let link6 = document.getElementById('link6');
let link7 = document.getElementById('link7');
let link8 = document.getElementById('link8');

let link9 = document.getElementById('link9');
let link10 = document.getElementById('link10');
let link11 = document.getElementById('link11');
let link12 = document.getElementById('link12');

let link13 = document.getElementById('link13');
let link14 = document.getElementById('link14');
let link15 = document.getElementById('link15');
let link16 = document.getElementById('link16');

let section1 = document.getElementById('box1')
let section2 = document.getElementById('box2')
let section3 = document.getElementById('box3')
let section4 = document.getElementById('box4')
let section5 = document.getElementById('box5')
let section6 = document.getElementById('box6')
let section7 = document.getElementById('box7')
let section8 = document.getElementById('box8')
let section9 = document.getElementById('box9')
let section10 = document.getElementById('box10')
let section11 = document.getElementById('box11')
let section12 = document.getElementById('box12')
let section13 = document.getElementById('box13')
let section14 = document.getElementById('box14')
let section15 = document.getElementById('box15')
let section16 = document.getElementById('box16')

// default
section1.style.display = "block"
section2.style.display = "none"
section3.style.display = "none"
section4.style.display = "none"
section5.style.display = "none"
section6.style.display = "none"
section7.style.display = "none"
section8.style.display = "none"
section9.style.display = "none"
section10.style.display = "none"
section11.style.display = "none"
section12.style.display = "none"
section13.style.display = "none"
section14.style.display = "none"
section15.style.display = "none"
section16.style.display = "none"

// onlink click show or hidden

link1.onclick = () => {
    hiddensection();
    section1.style.display = "block"
}
link2.onclick = () => {
    hiddensection();
    section2.style.display = "block"
}
link3.onclick = () => {
    hiddensection();
    section3.style.display = "block"
}
link4.onclick = () => {
    hiddensection();
    section4.style.display = "block"
}
link5.onclick = () => {
    hiddensection();
    section5.style.display = "block"
}
link6.onclick = () => {
    hiddensection();
    section6.style.display = "block"
}
link7.onclick = () => {
    hiddensection();
    section7.style.display = "block"
}
link8.onclick = () => {
    hiddensection();
    section8.style.display = "block"
}
link9.onclick = () => {
    hiddensection();
    section9.style.display = "block"
}
link10.onclick = () => {
    hiddensection();
    section10.style.display = "block"
}
link11.onclick = () => {
    hiddensection();
    section11.style.display = "block"
}
link12.onclick = () => {
    hiddensection();
    section12.style.display = "block"
}
link13.onclick = () => {
    hiddensection();
    section13.style.display = "block"
}
link14.onclick = () => {
    hiddensection();
    section14.style.display = "block"
}
link15.onclick = () => {
    hiddensection();
    section15.style.display = "block"
}
link16.onclick = () => {
    hiddensection();
    section16.style.display = "block"
}

let sec = document.getElementsByClassName('section')

function hiddensection()
{
    for (let i = 0; i < 16; i++) {
        sec[i].style.display = "none"
    }
}