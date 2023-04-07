// formula used :
// let typingSpeed = (actualWords /TotalTimeTaken ) * 60

// elements selected
const typingTextarea = document.querySelector("#textarea")
const btn = document.querySelector("#btn")
const typingScore = document.querySelector(".score")
const para = document.querySelector('.para')

let startingTime, endingTime, TotalTimeTaken

const paragraph = ['There is a way when there is no hope',
'Quick success do not always being satisfiction',
'Do not imagin impossible before doing anything',
'Never lose hope maybe that can bring also miracle if luck is around',
'Ugly heart and ugly mind make you lose yourself completely']


// event listener
btn.addEventListener('click', () =>{
    switch(btn.innerText.toLowerCase()){
        case "start" :
        typingTextarea.removeAttribute("disabled")
        startTyping()
        break;

        case "done" :
        typingTextarea.setAttribute("disabled", 'true')
        endTyping()
        break;

        
    }
})

// start Typing Function
const startTyping = () =>{
    let randomPara = Math.floor(Math.random() * paragraph.length)
    // console.log(randomPara)
    para.innerHTML = paragraph[randomPara]

    let date = new Date()
    startingTime = date.getTime()

    btn.innerText = "Done"

}

// end typing Function
const endTyping = () =>{
    btn.innerText = "Start"

    let date = new Date()
    endingTime = date.getTime()

    TotalTimeTaken = Math.round((endingTime - startingTime) / 1000)
    console.log(TotalTimeTaken)    

    calculateTypingSpeed(TotalTimeTaken)

    para.innerHTML = ""
    typingTextarea.value = ""
}

// calculate Typing Speed function
const calculateTypingSpeed = (timetaken) =>{
    let  totalWords = typingTextarea.value.trim()
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length

    if(actualWords !== 0){
        let speed = Math.floor((actualWords / timetaken ) * 60)
        typingScore.innerHTML = `Result : speed is ${speed} and time taken ${timetaken} and words ${actualWords}`
    }else{
        typingScore.innerHTML = `Result : speed is 0 and time taken 0 and words 0`
    }
}