var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var question_turn = "player1", answer_turn = "player2";

var score1 = 0, score2 = 0;
document.getElementById("player1_name").innerHTML = player1 +": ";
document.getElementById("player2_name").innerHTML = player2 +": ";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    c1 = word.charAt(1);
    console.log(c1);

    length_divide_2 = Math.floor(word.length/2);
    c2 = word.charAt(length_divide_2);
    console.log(c2);

    length_minus_1 = word.length - 1;
    c3 = word.charAt(length_minus_1);
    console.log(c3);

    r1 = word.replace(c1, " _ ");
    r2 = r1.replace(c2, " _ ");
    r3 = r2.replace(c3, " _ ");
    console.log(r3);

    question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - "+ answer);
    if(answer == word){
        if(answer_turn == "player1"){
            score1 ++;
            document.getElementById("player1_score").innerHTML = score1;
        }
        else{
            score2 ++;
            document.getElementById("player2_score").innerHTML = score2;
        }
    }
    if(question_turn == "player1"){
       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "Question Turn - " + player2;
    }
    else{
        question_turn = "player1";
       document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;
    }
     else{
         answer_turn = "player1";
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1;

     }
     document.getElementById("output").innerHTML = "";
}