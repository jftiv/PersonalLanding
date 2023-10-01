// Selectors
const bodyContainer = document.getElementsByClassName("body-container")[0];
const contentBox = document.getElementsByClassName("body-of-work")[0];
const contentBox2 = document.getElementsByClassName("iframe-header")[0];
const container = document.getElementsByClassName("container")[0];
const container2 = document.getElementsByClassName("container2")[0];
const examples = document.getElementsByClassName("ex")[0];
const goBackHome = document.getElementById("return");
const backward = document.getElementsByClassName("backward")[0];
const forward = document.getElementsByClassName("forward")[0];
const iFrame = document.getElementsByClassName("iframe")[0];
const title = contentBox.firstElementChild;

// Global Data
const iFrameIndex = 0;
const iFrameSites = [
    'http://secret-santa.net',
    'process/index.html',
    'bg-gen/index.html',
    'http://robo-friends.s3-website-us-east-1.amazonaws.com/',
    // add future sites here
];
const color_primaryDark = "#35434d";
const color_primaryLight = "#ffc600";
const color_ultraDark = "#15232D";
const color_compBlue = "#193549";
const color_white = "#fff";

// JS Event Listeners
examples.addEventListener("click", changeToFrame);
goBackHome.addEventListener("click", returnHome);
backward.addEventListener("click", previousExample);
forward.addEventListener("click", nextExample);

// Actions
function changeToFrame() {
    let links = [title];
    iFrame.src = iFrameSites[0];
    cleanArr(links);

    changeLinkColors(links, 'iframe');
    contentBox2.style.display = "grid";
    bodyContainer.style.display = "none";
    setTimeout(() => {
        contentBox2.style.height = "100px";
        contentBox2.style.color = "rgb(83, 84, 96)";
        container.style.height = "140px";
        contentBox2.style.width = "100%";
        contentBox2.style.borderRadius = "0";
    }, 300);
    setTimeout(() => {
        container2.style.height = "100VH";
    }, 300);
}; 

function returnHome() {
    let links = [title];
    cleanArr(links);

    setTimeout(() => {
        container2.style.height = "0";
        container.style.height = "100VH";
        contentBox2.style.borderRadius = "7px";
        contentBox2.style.width = "450px";
        contentBox2.style.position = "";
        if (window.innerWidth <= 500) contentBox2.style.height = "100VH";
        else contentBox2.style.height = "500px";
        bodyContainer.style.display = "grid";
        contentBox2.style.display = "none";
        changeLinkColors(links, 'home');
    }, 300)
    
}

function changeLinkColors(links, loc) {
    if (loc === 'home') {
        setTimeout(() => {
            title.style.color = color_white;
            links.forEach(element => {
                element.style.color = color_primaryLight;
            });
        }, 200);
    }
    else if (loc === 'iframe') {
        title.style.color = color_ultraDark;
        // links.forEach(element => {
        //     element.style.color = "rgb(242, 241, 248)";
        // });
    }
    else {
        console.log(`Error: loc of ${loc} is not valid.`);
    }
}

function previousExample() {
    let source = iFrameIndex === 0 ? iFrameSites[iFrameIndex] : iFrameSites[--iFrameIndex];
    iFrame.src = source;
}

function nextExample() {
    let source = iFrameIndex === (iFrameSites.length - 1) ? iFrameSites[iFrameIndex] : iFrameSites[++iFrameIndex];
    iFrame.src = source;
}

function cleanArr(links) {
    for (let i = 0; i < 5; i++) {
        links[i+1] = links[i].nextElementSibling;
        links[i] = links[i].getElementsByTagName("a")[0];
    }
    links.shift();
    links.pop();
}

setTimeout(() => {
    container.classList.remove('css-transitions-only-after-page-load');
}, 10);