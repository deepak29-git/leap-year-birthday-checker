const inputText=document.querySelector("#text-input");
const inputDate=document.querySelector("#date-input");
const calculateBtn=document.querySelector("#calculate-btn");
const outputDiv=document.querySelector("#output");

calculateBtn.addEventListener("click",()=>{
    var inputTextValue=inputText.value;
    var inputDateValue=inputDate.value;
    var year=inputDateValue.replaceAll("-","").split("").splice(0,4).join("")
    if(inputTextValue==="" || inputDateValue===""){
        outputDiv.innerText="Please enter both the fields"
    }else{

        if(year%4==0 && year%100 !=0 || year%400==0){
            outputDiv.innerText="Congratulation! "+ inputTextValue + " your birthday is comming in leap year";
            outputDiv.style.color="green";
        }else{
            outputDiv.innerText="Sorry! " + inputTextValue +" your birthday is not comming in leap year";
            outputDiv.style.color="red";
        }
    }
});