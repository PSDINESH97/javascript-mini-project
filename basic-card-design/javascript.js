
const buttons = document.querySelectorAll('.btn');
const theme = document.querySelector(':root');



buttons.forEach((color)=>{
    color.addEventListener('click',(e)=>{
        const colors = e.currentTarget.classList;

        if(colors.contains("btn1")){
            theme.style.setProperty('--theme-color','rgb(255, 136, 0)');
        }
        else if(colors.contains("btn2")){
            theme.style.setProperty('--theme-color','rgb(68, 0, 255)');

        }
        else if(colors.contains("btn3")){
            theme.style.setProperty('--theme-color','rgb(0, 247, 103)');

        }
        else if(colors.contains("btn4")){
            theme.style.setProperty('--theme-color','rgb(255, 0, 140)');

        }
    });
});