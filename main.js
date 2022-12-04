const obj = [
    {
        question: "Q1: In Boolean logic, you compare two items’ values and…",
        a: "Get any textual value",
        b: "Get any numerical value",
        c: "get one of two values: True or False",
        d: "Get one of three Values: True, False,or Undefined",
        ans: "ans3"
    },
    {
        question: "Q2: Which of these is not a core data type?",
        a: "List",
        b: "Dictionary",
        c: "Tuples",
        d: "Class",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following function convert a string to a float in python?",
        a: "int(x[,base])",
        b: "long(x[,base])",
        c: "float(x)",
        d: "str(x)",
        ans: "ans3"
    },

    {
        question: "Q4: What data type is the object below ? L = [1, 23, ‘hello’, 1]",
        a: "List",
        b: "Dictionary",
        c: "Tuple",
        d: "Array",
        ans: "ans1"
    },

    {
        question: "Q5: Which function overloads the >> operator?",
        a: "more()",
        b: "ge()",
        c: "gt()",
        d: "none of the above",
        ans: "ans4"
    },
]
const que = document.querySelector('.question')
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const sub_btn = document.querySelector("#submit-btn")
const answer = document.querySelectorAll(".options")
const result=document.querySelector("#result")
const playagain=document.querySelector("#playagain")

let questionindex = 0;
let score = 0;
const len = obj.length

function loadquestion() {
    que.innerHTML = obj[questionindex].question;

    option1.innerHTML = obj[questionindex].a;

    option2.innerHTML = obj[questionindex].b;

    option3.innerHTML = obj[questionindex].c;

    option4.innerHTML = obj[questionindex].d;

}
loadquestion();

function checkans() {
    let x;

    answer.forEach((anselem) => {
        if (anselem.checked) {
            x = anselem.id;
        }
    })
    return x;
}

function deselectans(){
    answer.forEach((anselem) => anselem.checked=false)
}


sub_btn.addEventListener("click", () => {
    const checkedans = checkans()
    if (checkedans == obj[questionindex].ans) {
        score++;
    }
    questionindex++;
    deselectans()
    if (questionindex < len) {
        loadquestion();
    }
    else{
        result.innerHTML="You scored "+score+"/"+len+"<br>"
        sub_btn.classList.add("btn_none")
        playagain.classList.add("playagain_show")
        playagain.addEventListener("click", ()=>{
            location.reload()
        })
    }
})