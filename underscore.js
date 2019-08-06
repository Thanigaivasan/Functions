var _=require("underscore");
var arr=[1,2,3,4,5];
var obj={first:1,second:2,third:3,fourth:4,fifth:5};

_.each(arr,function(val,i,obj){
    if(Array.isArray(obj))
    {
        console.log(val);
    }else{
        console.log(obj[i]);
    }
})
var count=0;
_.each(arr,function(val){
    count=count+1;
    if(val==2)
    {
        console.log("The value is present");
        console.log("It was found on "+count+" attempt");
    }
})

var mimic=_.map(obj,function(val){
    return val;
})

console.log(mimic);

var filter=_.filter(arr,function(val){
    if(val%2 == 0)
    return val;
})

console.log(filter);

