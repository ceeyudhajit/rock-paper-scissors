let pick = 0;
let score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score={
        wins:0,
        losses:0,
        ties:0
    }
}
let a = ['rock','paper','scissors'];
let decision = "";

function computerPicksOne(choice){
    pick = Math.floor(Math.random()*3 + 1);
    if(choice==pick){
        score.ties+=1;
        decision = "Draw!"
        // alert("Your Choice : " +a[choice-1]+",Computer Choice : "+a[pick-1]+",Draw! Score : Wins - "+score.wins+" Losses - "+score.losses+" Ties - "+score.ties);
    }
    else if(choice==1 && pick==2){
        score.losses+=1;
        decision = "You Loose :("
        // alert("Your Choice : " +a[choice-1]+",Computer Choice : "+a[pick-1]+",You Loose  Score : Wins - "+score.wins+" Losses - "+score.losses+" Ties - "+score.ties);
    }
    else if(choice==2 && pick==3){
        score.losses+= 1;
        decision = "You Loose :("
        // alert("Your Choice : " +a[choice-1]+",Computer Choice : "+a[pick-1]+",You Loose  Score : Wins - "+score.wins+" Losses - "+score.losses+" Ties - "+score.ties);
    }
    else if(choice==3 && pick==1){
        score.losses+=1;
        decision = "You Loose :("
        // alert("Your Choice : " +a[choice-1]+",Computer Choice : "+a[pick-1]+",You Loose  Score : Wins - "+score.wins+" Losses - "+score.losses+" Ties - "+score.ties);
    }
    else{
        score.wins+=1;
        decision = "You Win :)"
        // alert("Your Choice : " +a[choice-1]+",Computer Choice : "+a[pick-1]+",You Win  Score : Wins - "+score.wins+" Losses - "+score.losses+" Ties - "+score.ties);
    }
    console.log(score);
    localStorage.setItem('score',JSON.stringify(score));
    const choiceImage = `<img src="./images/${a[choice-1]}-emoji.png">`
    const pickImage = `<img src="./images/${a[pick-1]}-emoji.png">`
    document.querySelector('.move').innerHTML = `Your Choice${choiceImage}VS${pickImage}Computer Chose`;


    updateScore();

}

function updateScore(){
    document.querySelector('.decision').innerHTML = decision;

    document.querySelector('.score').innerText = `Score : Wins - ${score.wins} Losses - ${score.losses} Ties - ${score.ties}`;
}

updateScore();