var funcCaller =function(data,func)
{
    func(data);
}
var func=function(datas){
    //console.log(datas);
}

funcCaller("This is a call backfunction",func);

var firstVal=function(arr,func,index)
{
     func(arr,index);
}

var arrFunc=function(arr,arrIndex){
    for(key in arr)
    {
        if(key >= arrIndex)
        console.log(arr[key]);
        else
        continue;
    }
    console.log();
    for(i=arrIndex;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
var array=[1,2,3,4,5,6,7,8,9];
firstVal(array,arrFunc,2);

var flag=true;

var creditCharge=function(card,amount)
{
    if(flag)
    {
    processpayment(card,amount);
    flag=false;
    }
}
var cardNo=12345;
var balance=23000;
var processpayment=function(card,amount)
{
    var temp=cardNo
    while(temp==card)
    {
        balance=balance-amount;
        console.log("Amount charged is ",amount);
        console.log("Remaining balance is ",balance);
        temp++;
    }
}

creditCharge(12345,1500);

