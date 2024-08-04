

let boxes =document.querySelectorAll(".box");
let resetBtn =document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let hide =document.querySelector(".hide");


let turn0 =true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];


    const resetGame =()=>{
        turn0 =true;
        enableBoxes();
        msgcontainer.classList.add("hide");

        
    }
// add event listener
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box clicked");
       if (turn0) {  // player 0
        box.innerText="0"
        turn0=false;
       }
       else{  // player X
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;
       checkWinner();
    });
});

// for disAble

    const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled= true;
        }
    }
    // For enable after the new game or restart..
    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }



    const showWinner=(winner)=>{
        msg.innerText=`Yesss!!!, Tu jeet Gya "${winner}"`;
        
        msgcontainer.classList.remove("hide");
        
        disableBoxes();
    }
 const checkWinner=()=>{
    for(let pattern of  winpattern)
       {
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
          
        }
       }
    };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
   