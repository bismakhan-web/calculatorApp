

function displayValue(num){

    var number = document.getElementById("result");
    number.value += num;
}

function clearAll(id){

    var clear = document.getElementById(id);
    clear.value = "";
}

function clearRecent(id){

    var clear = document.getElementById(id);
    var lastChar = clear.value;
    document.getElementById(id).value=lastChar.substring(0,lastChar.length-1)
}

function calculate(id){

    var result = document.getElementById(id);
    var str = result.value;
    var flag = 0;

    for(var i = 0 ; i<str.length ; i++){

        if(str[i] === "^"){

            flag = 1;
        }else if(str[i] === "b"){

            flag = 2;
        }else if(str[i] === "y"){

            flag = 3;
        }
    }

    if(flag === 1){

        powerX();
    
    }else if(flag === 2){

        logWithBase();
    
    }else if(flag === 3){

        powerRoot();
    
    }else{

        result.value = eval(result.value);
    }

}

function square(id){

    var result = document.getElementById(id);
    result.value = (result.value*result.value);
}

function root(id){

    var result = document.getElementById(id);
    result.value = Math.sqrt(result.value);
}

function half(id){

    var result = document.getElementById(id);
    result.value = 1/result.value;
}

function changeSign(id){

    var result = document.getElementById(id);
    if(result.value !== '0'){
        result.value = -result.value;
    }
}

function displayValueScientific(num){

    var number = document.getElementById("scientificResult");
    number.value += num;
}

function PIvalue(){

    var result = document.getElementById("scientificResult");
    result.value = Math.PI;
}

function eValue(){

    var result = document.getElementById("scientificResult");
    result.value = Math.E;
}

function absValue(){

    var result = document.getElementById("scientificResult");
    result.value = Math.abs(result.value);
}
function expValue(){

    var result = document.getElementById("scientificResult");
    result.value = Math.exp(result.value);
}
function cubeRoot(){

    var result = document.getElementById("scientificResult");
    result.value = Math.cbrt(result.value);
}

function cube(power){

    var result = document.getElementById("scientificResult");
    result.value = Math.pow(result.value, power);
}

function powerBase10(){

    var result = document.getElementById("scientificResult");
    result.value = Math.pow(10,result.value);
}

function log(){

    var result = document.getElementById("scientificResult");
    result.value = Math.log10(result.value);
}

function ln(){

    var result = document.getElementById("scientificResult");
    result.value = Math.log(result.value);
}
Math.log = (function () {
    var log = Math.log;
    return function (n, base) {
        return log(n) / (base ? log(base) : 1);
    };
})();
function logWithBase(){

    var result = document.getElementById("scientificResult");
    var str = result.value;
    
    var baseLog = " base log ";

    var index = str.indexOf(" base log ");
    
    var base = str.slice(0, index);
    var baseToNum = Number(base);

    var log = str.slice(index+(baseLog.length));
    var logToNum = Number(log);

    result.value = Math.log(baseToNum, logToNum);

}

function powerBase2(){

    var result = document.getElementById("scientificResult");
    result.value = Math.pow(2, result.value);
}
function ePowerX(){

    var result = document.getElementById("scientificResult");
    result.value = Math.exp(result.value);
}
function powerRoot(){

    var result = document.getElementById("scientificResult");
    var str = result.value;
    
    var yroot = " yroot ";

    var index = str.indexOf(" yroot ");
    
    var base = str.slice(0, index);
    var baseToNum = Number(base);

    var limit = str.slice(index+(yroot.length));
    var limitToNum = Number(limit);

    var power = 1/limitToNum;

    var rootPower = Math.pow(baseToNum,power);

    result.value = rootPower;

}
function powerX(){

    var result = document.getElementById("scientificResult");
    var str = result.value;
    
    var index = str.indexOf("^");

    var base = str.slice(0, index);
    var baseToNum = Number(base);

    var limit = str.slice(index+1);
    var limitToNum = Number(limit);

    var power = Math.pow(baseToNum,limitToNum);

    result.value = power;
}
function sin(id){

    var result = document.getElementById("scientificResult");
    result.value = Math.sin(result.value);

}
function cos(){

    var result = document.getElementById("scientificResult");
    result.value = Math.cos(result.value);
}

function tan(){

    var result = document.getElementById("scientificResult");
    result.value = Math.tan(result.value);
}

function cosec(){

    var result = document.getElementById("scientificResult");
    result.value = 1 / Math.sin(result.value);
}

function sec(){

    var result = document.getElementById("scientificResult");
    result.value = 1 / Math.cos(result.value);
}

function cot(){

    var result = document.getElementById("scientificResult");
    result.value = 1 / Math.tan(result.value);
}
function factorial(){

    var result = document.getElementById("scientificResult");
    var fact = 1;
    var i = Number(result.value);
    
    while(i >= 1){

        fact = i * fact;
        i--;
    }

    result.value = fact;
}
function displayButtons(){

    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");
    var b6 = document.getElementById("b6");

    var b7 = document.getElementById("b7");
    var b8 = document.getElementById("b8");
    var b9 = document.getElementById("b9");
    var b10 = document.getElementById("b10");
    var b11 = document.getElementById("b11");
    var b12 = document.getElementById("b12");

    if(b1.style.display === "inline-block" && b2.style.display === "inline-block" && b3.style.display === "inline-block" 
    && b4.style.display === "inline-block" && b6.style.display === "inline-block" && b5.style.display === "inline-block" ){

        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        b5.style.display = "none";
        b6.style.display = "none";

        b7.style.display = "inline-block";
        b8.style.display = "inline-block";
        b9.style.display = "inline-block";
        b10.style.display = "inline-block";
        b11.style.display = "inline-block";
        b12.style.display = "inline-block";

    }else{
        b1.style.display = "inline-block";
        b2.style.display = "inline-block";
        b3.style.display = "inline-block";
        b4.style.display = "inline-block";
        b5.style.display = "inline-block";
        b6.style.display = "inline-block";

        b7.style.display = "none";
        b8.style.display = "none";
        b9.style.display = "none";
        b10.style.display = "none";
        b11.style.display = "none";
        b12.style.display = "none";
    }
}

function displayTrigBtns(){

    var div = document.getElementById("trig-btns");

    if(div.style.display === "block"){

        div.style.display = "none";

    }else{

        div.style.display = "block";
    }
}
function displayScientific(){

    var standardDiv = document.getElementById("standard");
    var scientificDiv = document.getElementById("scientific");

    scientificDiv.style.display = "block";
    standardDiv.style.display = "none";

}
function displayStandard(){

    var standardDiv = document.getElementById("standard");
    var scientificDiv = document.getElementById("scientific");

    scientificDiv.style.display = "none";
    standardDiv.style.display = "block";

}
