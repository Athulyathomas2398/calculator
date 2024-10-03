const displayContent=(content)=>{
    display.value+=content
}
showResult=()=>{
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value=""
        display.placeholder="Invalid Expression"
    }
}
clearAll=()=>{
    display.value=null
    display.placeholder=0
}
Remove=()=>{
    display.value=display.value.slice(0,-1)
}