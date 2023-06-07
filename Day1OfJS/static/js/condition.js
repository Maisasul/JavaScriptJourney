var userValue;
var balanceValue = 50000;
var amount;
console.log("error")
userValue = Number(prompt("please enter your option (1-withdraw, 2-deposite, 3-transfer)"));

switch(userValue)
{
    case 1:
        //withdraw validation balance
        amount = Number(prompt("please enter amount?"));
        if(amount <= 0)
        {
            alert("invalid amount");
        }
        else if(balanceValue <= amount)
        {
            alert("invalid amount");
        }
        else
        {
            balanceValue -= amount;
            alert("new balance = "+balanceValue);
        }
        break;
    case 2:
        amount = Number(prompt("please enter amount?"));
        if(amount <= 0)
        {
            alert("invalid amount");
        }
        else
        {
            balanceValue += amount;
            alert("new balance = "+balanceValue);
        }
        break;
    case 3:
        amount = Number(prompt("please enter amount?"));
        if(amount <= 0)
        {
            alert("invalid amount");
        }
        else
        {
            balanceValue -= amount;
            alert("new balance = "+balanceValue);
        }
        break;
    default:
        alert("invalid amount");
        break;
}
