
// getHexa
const getHexa = () => {
    let result = "#";
    for(let i = 0 ; i < 6 ; i++){
        let idx = Math.floor(Math.random()*chars.length);

        result += chars[idx];
    }
    return result;
}

// getRGB
const getRGB = () => {
    let result = "rgb(";
    for(let i = 0 ;i < 3 ; i++){
        let code = Math.floor(Math.random()*255);

        //coditon for , or )
        if(i == 2){
            result += `${code})`;
        }else{
            result += `${code},`;
        }
    }
    return result;
}

//getPassword
const getPassword = () => {
    let result = "";
    // now only pw is only length 6 . can be changed with arg val

    for(let i = 0 ; i < 6 ; i++){
        let idx = Math.floor(Math.random()*syms.length);
        result += syms[idx];
    }
    return result;
}

// getPlace
const getPlace = () => {
    let idx = Math.floor(Math.random()*places.length);

    return places[idx];
}

//getName
const getName = () => {
    let idx = Math.floor(Math.random()*names.length);
    return names[idx];
}

