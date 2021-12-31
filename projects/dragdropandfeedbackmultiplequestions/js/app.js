const quizimage = [
    // {
    //     image: "./img/cat.png",
    //     answer: "CAT"
    // },
    {
        image: "./img/ant.png",
        answer: "ANT"
    },
    {
        image: "./img/sum.png",
        answer: "SUM"
    },
    {
        image: "./img/cow.png",
        answer: "COW"
    },
    {
        image: "./img/bed.png",
        answer: "BED"
    },
    {
        image: "./img/pig.png",
        answer: "PIG"
    },
    {
        image: "./img/fly.png",
        answer: "FLY"
    }
];

const img = document.querySelector(".img");

let currentquiz = 0;

function loadquiz() {
    const currentquizimg = quizimage[currentquiz];
    img.src = currentquizimg.image;
    img.alt = currentquizimg.answer;

}
loadquiz();

const letters = document.querySelectorAll(".fill"),
    empties = document.querySelectorAll(".empty");

const correct = document.querySelector(".correct"),
    wrong = document.querySelector(".wrong");
const cresult = document.getElementById("cresult"),
    wresult = document.getElementById("wresult");

letters.forEach(letter => {
    letter.addEventListener("dragstart", dragstart);
    letter.addEventListener("dragend", dragend);

});

function dragstart() {
    console.log("dragstart is working");
}

function dragend() {
    console.log("dragend is working");
    this.className = "fill";
}

empties.forEach(empty => {
    empty.addEventListener('dragover', dragover);
    empty.addEventListener('dragenter', dragenter);
    empty.addEventListener('dragleave', dragleave);
    empty.addEventListener('drop', dragdrop);


});

function dragover(e) {
    console.log('drag over');
    e.preventDefault();
}

function dragenter(e) {
    console.log('drag enter');
    e.preventDefault();

    // this.className += " hovered";
}

function dragleave(e) {
    console.log('drag leave');
    e.preventDefault();

    // this.className = "empty";
}


function dragdrop(e) {
    console.log('drag drop');
    // console.log(e.target);
    this.className = "empty";
    letters.forEach((letter) => {
        // console.log(letters[0]);
        letter.addEventListener("dragend", (e) => {
            // console.log(letter.innerText === "DOG");
            this.appendChild(e.target);
            this.className = "empty fill";
            console.log(empties[0].innerText + empties[1].innerText + empties[2].innerText);
            // console.log(empties[1].innerText);
            // console.log(typeof empties[2].innerText);
            let resulttext = empties[0].innerText + empties[1].innerText + empties[2].innerText;
            console.log(resulttext.length === 3);

            if (resulttext.length === 3) {
                if (resulttext === quizimage[currentquiz].answer) {
                    console.log("correct");
                    cresult.innerText = resulttext;
                    correct.style.display = "block";
                } else {
                    console.log("try");

                    wresult.innerText = resulttext;
                    wrong.style.display = "block";
                }
            } else {
                correct.style.display = "none";
                wrong.style.display = "none";
            }


        });

    });


}


const trybtn = document.querySelector(".try"),
    nextbtn = document.querySelector(".next");

trybtn.addEventListener("click", () => {
    // window.reload();
    correct.style.display = "none";
    wrong.style.display = "none";
    window.location.reload();
});

// console.log(quizimage.length);
nextbtn.addEventListener("click",()=>{
    currentquiz++;
    
    if (currentquiz < quizimage.length){
    
    loadquiz();
    
    empties[0].firstChild.remove();
    empties[1].firstChild.remove();
    empties[2].firstChild.remove();

    correct.style.display = "none";
    wrong.style.display = "none";

    
}else{
    currentquiz = 0;
    correct.style.display = "none";
    wrong.style.display = "none";
    window.location.reload();
}

})