
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbutton = document.querySelector("#new-button");
let content = document.querySelector(".new");
let msg = document.querySelector("p");
let count = 0;
let turnO = true;
let arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            box.classList.add("change");
            turnO=false;
        }
        else{
            box.classList.remove("change");
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        check();
    });
});

const disable = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enable = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText ="";
    }
};

const res = () => {
    count = 0;
    enable();
    content.classList.add("hide");
};

const winner = (indx) => {
    msg.innerText =`Congragulations, Winner is ${indx}`;
    content.classList.remove("hide");
    disable();

}
const draw = () =>{
    msg.innerText =`Match Drawed`;
    content.classList.remove("hide");
    disable();
    count = 0;
};
const check = () => {
    for(pattern of arr)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(count === 9)
            draw();
        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                winner(pos1);
            }
        }
    
    }
};

reset.addEventListener("click",res);
newbutton.addEventListener("click",res);
