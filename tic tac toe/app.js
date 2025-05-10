let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newbutton");
let msgCont = document.querySelector(".msgCont");
let msg = document.querySelector("#msg");
 let trunX =true;

 const winPattern= [
    [0,1,2],[0,3,6],
    [0,4,8],[1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

let count =0;

const Draw =()=>{
    msg.innerText = "It's a Draw";
    msgCont.classList.remove("hide");
    disablBut();
}

const resetGame=()=>{
    trunX =true;  
    ensablBut();
    count=0;
    msgCont.classList.add("hide");
};

const disablBut=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
};

const ensablBut=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(trunX){
            box.innerText="X";
            trunX= false;
        }else{
            box.innerText="O";
            trunX=true;
        }
        box.disabled= true;
        checkwin();
        count++;
        checkwin();
    });
})

const showin=(winner)=>{
    msg.innerText = `Congratulaion, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disablBut();
};

function checkwin() {
    for (let pattern of winPattern) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") 
            {
            if (p1 === p2 && p1 === p3)
                {
                console.log("winner", p1);
                showin(p1);
                return;
                }
            }
            if(count===9){
                Draw();
            }
    }

};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);