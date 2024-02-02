var count = 20;
var x=Math.floor(Math.random()*20);
let highscore = 0;

var check = document.getElementById('btn2');
check.addEventListener('click', (event) => {
    let Entervalue =document.getElementById('box2').value;
    
    if (Entervalue === '') {
        document.querySelectorAll('.num')[0].innerHTML =
            `Hey 🫵.,First Enter the Value.`
        
    }

    Entervalue = parseInt(document.getElementById('box2').value);
    if (Entervalue === x && count === 20) {
        var text1 = document.querySelectorAll('.num')[0];
        text1.innerHTML = '🎉 Congratulation., You Won the Dragon Egg';
        text1.style.color='blue'
        document.body.style.backgroundColor = "green";
        document.querySelectorAll('.num')[1].innerHTML = `☠️Score: ${count}`;
        document.getElementById('box').innerHTML = x

        if (count > highscore) {
            highscore = count;
            document.querySelectorAll('.num')[2].innerHTML = `😎 HighScore: ${highscore}`;
        }

    }
    else if (event.type === "click") {
        count -= 1;
        document.querySelectorAll('.num')[1].innerHTML = `☠️Score: ${count}`
    }

    if (((Entervalue + 3) >= x) && (Entervalue < x)) {
        document.querySelectorAll('.num')[0].innerHTML =
            `🙂 You are nearing to me`;
        document.querySelectorAll('.num')[0].style.color = 'green';
    }
    else if (((Entervalue - 3) <= x) && (Entervalue > x)) {
        document.querySelectorAll('.num')[0].innerHTML =
            `😒 You are away from me`;
        document.querySelectorAll('.num')[0].style.color = 'green';
    }
    else if (Entervalue < x) {
        document.querySelectorAll('.num')[0].innerHTML =
            `😴 The Value is Too Low`;
        document.querySelectorAll('.num')[0].style.color = 'red';
    }
    else if (Entervalue > x) {
        document.querySelectorAll('.num')[0].innerHTML =
            `😴 The Value is Too high`;
        document.querySelectorAll('.num')[0].style.color = 'red';
    }

    else if(Entervalue === x) { 
        var text1 = document.querySelectorAll('.num')[0];
        text1.innerHTML = '🎆 Congratulation., You Won the Dragon Egg';
        document.body.style.backgroundColor = "green";
        document.querySelectorAll('.num')[1].innerHTML = `☠️Score: ${count}`
        document.querySelectorAll('.num')[2].innerHTML = `😎 HighScore: ${highscore}`;
        document.querySelectorAll('.num')[0].style.color = 'blue';
        document.getElementById('box').innerHTML = x


        if (count > highscore) {
            highscore = count;
            document.querySelectorAll('.num')[2].innerHTML = `😎 HighScore: ${highscore}`;
        }
    }
})

var Again = document.querySelector('.btn1');
Again.addEventListener('click', () => {
    x=Math.floor(Math.random()*20);
    count = 20;
    var Entervalue = document.getElementById('box2').value = '';
    document.body.style.backgroundColor = "";
    document.querySelectorAll('.num')[0].innerHTML =
        `🤖 Enter the Dragon Number..?`;
    document.querySelectorAll('.num')[0].style.color = 'white';
    document.querySelectorAll('.num')[1].innerHTML = `☠️Score: ${count}`;
    document.getElementById('box').innerHTML = '?'

})