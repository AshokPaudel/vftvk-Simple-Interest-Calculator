function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number");
        return;
    }
    var rate =document.getElementById("interest").value;
    var t=document.getElementById("years").value;
    var yearIn=new Date().getFullYear()+parseInt(t);
    var interest =principal*t*rate/100;
    console.log("p rate t : ",principal,rate,t, yearIn,"interest = ",interest);
    //alert("The interest is "+interest);

    document.getElementById("result2").innerHTML="\nIf you deposit "+principal+
    ",\<br\>at an interest rate of "+rate+",<br\> you will receive amount of "+interest+
    ",<br\> in the year "+yearIn

}
function changeSliderVal(){
    var interest=document.getElementById("interest").value;
    console.log(interest);
    document.getElementById("result").innerText=interest;
}
        