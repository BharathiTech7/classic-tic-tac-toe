let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let msg=document.querySelector("#msg");
let newG=document.querySelector("#new-btn");
let turnX=true;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
         checkWinner();
    })
})
const disableBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="brown"; 
    })
    turnX=true;
}
const showWinner=(winner,pattern)=>{
   msg.innerText=`Congratulations! Winner is ${winner}`;
    pattern.forEach(index=>{
        boxes[index].style.backgroundColor="green"; 
    })
   disableBtn();
   msg.classList.remove('hide');
   newG.classList.remove('hide');
}
const checkWinner=()=>{
      let winnerFound = false
    for(pattern of patterns){
       let val1=boxes[pattern[0]].innerText;
       let val2=boxes[pattern[1]].innerText;
       let val3=boxes[pattern[2]].innerText;
    if(val1!=""&&val2!=""&&val3!=""){
        if(val1===val2&&val2===val3){
        console.log(`winner is ${val2}`);
      showWinner(val1,pattern);
       winnerFound = true;
         break;
    }
    }
    }
    if (!winnerFound) {
        checkDraw();
    }
}
reset.addEventListener('click',()=>{
  enableBtn();
   msg.classList.add('hide');
   newG.classList.add('hide');
})
newG.addEventListener("click",()=>{
    enableBtn();
   msg.classList.add('hide');
   newG.classList.add('hide');
})
const checkDraw = () => {
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; 
        }
    });

    if (isDraw) {
        msg.innerText = "It's a Draw!";
        msg.classList.remove("hide");
        newG.classList.remove("hide");
        disableBtn();
    }
};
