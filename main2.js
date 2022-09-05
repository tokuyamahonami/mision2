let result = document.getElementById("result");
let data = "";
let is_calc = false;


function ope_click(val){
    if(is_calc) is_calc = false;
    
    if(is_ope_last()){
        result.value = result.value.slice(0,-1) + val;
    }else{
        result.value += val;
    }
}

function is_ope_last(){
  return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}

function num_click(value){
    if(is_calc) result.value = "0";
    is_calc = false;
    
    if(result.value == "0" && value == "0"){
        result.value = "0";
    }else if(result.value == "0" && value =="."){
        result.value = "0.";
    }else if(result.value == "0"){
        result.value = value;
    }else{
        result.value += value;
    }
}

function equal_click(){
    if(is_ope_last()) result.value.slice(0,-1);
    result.value = new Function("return " + result.value)();
    
    if (ans == Infinity || Number.isNaN(ans)){
        result.value = "Error";
    }else{
        result.value = ans;
        is_calc = true;
    }
}

    
function c_click(){
        result.value = "0";
        is_calc = false;
}
