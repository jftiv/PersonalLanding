const contentBox = document.getElementsByClassName("content-box")[0];
const contentBox2 = document.getElementsByClassName("content-box-2")[0];
const content = contentBox.innerHTML;
const container = document.getElementsByClassName("container")[0];
const container2 = document.getElementsByClassName("container2")[0];
const backward = document.getElementsByClassName("backward")[0];
const forward = document.getElementsByClassName("forward")[0];
const iFrame = document.getElementsByClassName("iframe")[0];
const title = contentBox.firstElementChild;
let examples = document.getElementsByClassName("ex")[0];
let goBackHome = document.getElementById("return");
let iFrameIndex = 0;
let links = [title];
let iFrameSites = [
    'process/index.html',
    'bg-gen/index.html',
];

for (let i = 0; i < 5; i++) {
    links[i+1] = links[i].nextElementSibling;
    links[i] = links[i].getElementsByTagName("a")[0];
}
links.shift();
links.pop();

examples.addEventListener("click", changeToFrame);
goBackHome.addEventListener("click", returnHome);
backward.addEventListener("click", previousExample);
forward.addEventListener("click", nextExample);

function changeToFrame() {
    title.style.color = "rgb(242, 241, 248)";
    links.forEach(element => {
        element.style.color = "rgb(242, 241, 248)"
    })
    contentBox2.style.display = "grid";
    contentBox.style.display = "none";
    setTimeout(() => {
        contentBox2.style.height = "100px";
        contentBox2.style.color = "rgb(83, 84, 96)";
        container.style.height = "140px";
        contentBox2.style.width = "100%";
        contentBox2.style.borderRadius = "0";
    }, 500);
    setTimeout(() => {
        container2.style.height = "100VH";
    }, 500);
}; 

function returnHome() {
    container2.style.height = "0";
    container.style.height = "100VH";
    contentBox2.style.borderRadius = "7px";
    contentBox2.style.width = "450px";
    contentBox2.style.position = "";
    if (window.innerWidth <= 500) contentBox2.style.height = "100VH";
    else contentBox2.style.height = "500px";
    contentBox.style.display = "grid";
    contentBox2.style.display = "none";
    setTimeout(() => {
        title.style.color = "rgb(83, 84, 96)";
        links.forEach(element => {
            element.style.color = "rgb(83, 84, 96)"
        })
    }, 400)
    
}

function previousExample() {
    let source = iFrameIndex === 0 ? iFrameSites[iFrameIndex] : iFrameSites[--iFrameIndex];
    iFrame.src = source;
}

function nextExample() {
    let source = iFrameIndex === (iFrameSites.length - 1) ? iFrameSites[iFrameIndex] : iFrameSites[++iFrameIndex];
    iFrame.src = source;
}