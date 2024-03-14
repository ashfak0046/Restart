const bodyBg = document.querySelector('body');
console.log(bodyBg);

const buttons = document.querySelectorAll('.buttons');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.id)
        if(e.target.id === "grey"){
            bodyBg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            bodyBg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "cyan"){
            bodyBg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "orange"){
            bodyBg.style.backgroundColor = e.target.id;
        }
    })
})