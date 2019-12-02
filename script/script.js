// declare value of RGB
let r = 0;
let g = 0;
let b = 0;

// change transition color
const changeColor = (e) => {
    let color = `rgb(${r}, ${g}, ${b})`;
    if (e.code === 'ArrowUp') {
        r += 5;
        g += 5;
        b += 5;
        console.log(color);
        if (r === g === b >= 255) {
            r = g = b = 255;
        }
    } else if (e.code === 'ArrowDown') {
        r -= 5;
        g -= 5;
        b -= 5;
        console.log(color);
        if ( r === g === b <= 0){
            r = g = b = 0;
        }
    }
    document.body.style.backgroundColor = color;
};

// get event and change color
document.body.addEventListener('keydown', changeColor);
