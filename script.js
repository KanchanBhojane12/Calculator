let user_intput=document.getElementById('user_input')
let button= document.querySelectorAll('button')
//console.log(button)
button.forEach(element=> {
    element.addEventListener('click',(e)=>{
        console.log(typeof e.target.textContent)
        if(e.target.textContent ==="C"){
            user_intput.innerHTML =""
        }
        else if(e.target.textContent==="X"){
            user_intput.innerHTML = user_intput.innerHTML.slice(0,-1)

        }
        else if(e.target.textContent ==="=")
        {
            user_intput.innerHTML= eval(user_intput.innerHTML)
        }
        else{
            user_intput.innerHTML+= e.target.textContent
        }
        user_intput.scrollLeft= user_intput.scrollWidth

    })
})
   


