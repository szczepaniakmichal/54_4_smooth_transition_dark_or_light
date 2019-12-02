let r = 0;

document.body.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowDown') {
        r++;
        console.log(r);
    }
});