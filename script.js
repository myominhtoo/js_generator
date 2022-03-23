// actions for btn click
btn.addEventListener("click" , showOutputs);

// function getting input
function getInputs(){
    let count = num.value;
    let choice = select.value;

    return {count,choice};
}

// for generate
const generate = (choice) => {
    let result;
    switch(choice){
        case 'hex': result = getHexa();break;
        case 'rgb': result = getRGB();break;
        case 'pw': result = getPassword();break; 
        case 'name': result = getName();break;
        case 'place':result = getPlace();break;
        default:result = "Invalid!";
    }
    return result;
}

//function for result data according to inputs and generate
const getResult = () => {
    // destructuring datas from return of getInputs()
    let {count,choice} = getInputs();

    // for return
    let result = new Array();

    for(let i = 0 ; i < count ; i++){
        result.push(generate(choice));
    }
    return result;
}

// function for output will make dom manipulate
function showOutputs(){
    let datas = getResult();

    let result = datas.map(data => {
        let p = document.createElement("p");
        p.innerText = data;
        p.style.fontStyle = "italic";

        output.append(p);
    })

    // to run after 3 mins
    setTimeout(() => {
        getReset();
    },50000);
}


//will also run on click .clear
document.querySelector(".clear").onclick = getReset;

//  to reset
function getReset (){
    output.innerHTML  = "";
    num.value = "";
    select.value = "";
}
