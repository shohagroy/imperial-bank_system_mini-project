
// date function 
const dayFunction = document.getElementById('day');
dayFunction.innerText = new Date().getDate();

const monthFunction = document.getElementById('month');
monthFunction.innerText = new Date().getMonth();

const yearFunction = document.getElementById('year');
yearFunction.innerText = new Date().getFullYear();

// time function 
document.getElementById('hours').innerText = new Date().getHours();
document.getElementById('minite').innerText = new Date().getMinutes();



// deposit-button function 
document.getElementById('deposit-button').addEventListener('click', function(){

    // get deposit button 
    const depositInput = document.getElementById('deposit-fild');
    const depositAmmountvalue = depositInput.value
    const depositAmmount = parseFloat(depositAmmountvalue);

    
    // chaking input value number or not 
    if(isNaN(depositAmmount)){
        depositInput.value = "";
        return alert("Please Enter Valid Number");
    }else{
        const depositOut = document.getElementById('depositoutput');
        const depositOutstring = depositOut.innerText;
        const depositOutValue = parseFloat(depositOutstring);
        depositOut.innerText = depositOutValue + depositAmmount;


        // current amount output fild 
        const currentOut = document.getElementById('currentOutfild');
        const currentOutPutValue = currentOut.innerText;
        const currentAmmount = parseFloat(currentOutPutValue);


        currentOut.innerText = currentAmmount + depositAmmount;
    }
    depositInput.value = "";

    

})


// withdrow-button function 
document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowInput = document.getElementById('withdrow-fild');
    const withdrowInputValue = withdrowInput.value;
    const withdrowAmmount = parseFloat(withdrowInputValue);

    if(isNaN(withdrowAmmount)){
        withdrowInput.value = ""; 
        return alert("Please Enter Valid Number");
    }else{
        const withdrowOut = document.getElementById('withdrowOutput');
        const withdrowOutString = withdrowOut.innerText;
        const withdrowOutValue = parseFloat(withdrowOutString);
        withdrowOut.innerText = withdrowOutValue + withdrowAmmount;

        // current amount output fild 
        const currentOut = document.getElementById('currentOutfild');
        const currentOutPutValue = currentOut.innerText;
        const currentAmmount = parseFloat(currentOutPutValue);

        currentOut.innerText = currentAmmount - withdrowAmmount;


    }
    withdrowInput.value = "";
})




// logout button function
document.getElementById('logout-button').addEventListener('click', function(){
    window.location.href = "index.html"
});