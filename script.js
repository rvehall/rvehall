let w = 0;
let h = 0;
let numLines = 0;

const input = document.getElementById("command");
const background = "<div class='tilde'>~</div>";

getWindowSize();
repeatTilde();

onresize = (event) => {
    getWindowSize();
    repeatTilde();
}

function getWindowSize() {
    w = window.innerWidth;
    h = window.innerHeight;
    document.getElementById("windowSize").innerText = `${w} x ${h}`;
}

function repeatTilde() {
    let el = document.getElementById('content');
    let lh = parseInt(document.defaultView.getComputedStyle(el, null).getPropertyValue("font-size").replace("px", "")) * 1.14;
    numLines = h / lh - 6;
    let result = background.repeat(numLines);
    document.getElementById("background").innerHTML = result;
}

document.addEventListener("keydown", (event) => document.getElementById("command").focus());

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        switch (event.target.value.toLowerCase()) {
            case 'linkedin':
            case ':linkedin':
                window.open('https://www.linkedin.com/in/rvehall/', '_blank');
                break;
            case 'code':
            case ':code':
                window.open('https://github.com/rvehall/', '_blank');
                break;
            default:
                alert("Please enter a valid request")
        }
    }
});
