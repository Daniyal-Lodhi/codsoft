const handleBtnClick = (target)=>{
    let input = document.getElementById('input')
    // console.log(Number(target.value))
    input.value = input.value + target.value
}

const showResult = ()=>{
    let input = document.getElementById('input')
    const InpValue = input.value
    console.log(eval(InpValue))
}

const clearAll = ()=>{
    let input = document.getElementById('input')
    input.value = null;
}