var a, b, c;
var d = 0;
var range = 5;

document.querySelector('#bt1').onclick = function () {
    a = parseInt(Math.random() * 3 + 1);
    document.querySelector("#first").textContent = a;
    const b1 = document.querySelector('#bt1');
    b1.disabled = true;
    const b3 = document.querySelector('#bt2');
    b3.disabled = false;
};

document.querySelector('#bt2').onclick = function () {
    b = parseInt(Math.random() * 3 + 1);
    document.querySelector('#second').textContent = b;

    c = parseInt(document.querySelector('#first').textContent);

    if (c == b) {
        const b2 = document.querySelector("#bt2");
        b2.disabled = true;
    }
    document.querySelector('#count').textContent = d;
    d++;
};

var e, f, g;
var h = 0;

document.querySelector('#bt3').onclick = function () {
    e = parseInt(Math.random() * 3 + 1);
    document.querySelector("#third").textContent = e;
    const f1 = document.querySelector('#bt3');
    f1.disabled = false;
    const f3 = document.querySelector('#bt4');
     f3.disabled =false ;
};

document.querySelector('#bt4').onclick = function () {
    f = parseInt(Math.random() * 3 + 1);
    document.querySelector('#fourth').textContent = f;

    g = parseInt(document.querySelector('#third').textContent);

    if (g == f) {
        const f2 = document.querySelector("#bt4");
        f2.disabled = true;
    }
    document.querySelector('#count1').textContent = h;
    h++;
};

document.querySelector('#result').onclick = function () {
    var player1Count = parseInt(document.querySelector('#count').textContent);
    var player2Count = parseInt(document.querySelector('#count1').textContent);

    var winnerText = '';
    if (player1Count < player2Count) {
        winnerText = 'Player 1 is the winner!';
    } else if (player2Count < player1Count) {
        winnerText = 'Player 2 is the winner!';
    } else {
        winnerText = 'It\'s a tie!';
    }

    document.querySelector('#winner').textContent = winnerText;
};
