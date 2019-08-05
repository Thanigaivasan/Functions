var nonsense=function(msg){
    var blab=function(){
        console.log(msg);
    }
    return blab;
}

var blablater=nonsense("hi");
var blabAgainLater=nonsense("thanigai");

//blablater();
//blabAgainLater();

var firstname=function(fname){
    var fname=fname;
    var lastname=function(lname)
    {
        console.log(fname+lname);
    }
    return lastname;
}

// var name=firstname("Thanigai");
// name("Vasan");

var storyWrite=function(){
    var story=" ";
    return{
        addwords:function(words){story=story+words;
                                  console.log(story);},
        erase:function(){ story=" ";
                        console.log(story);}
    }
}

var newStory=storyWrite();
newStory.addwords("It was around six in the evening");
newStory.addwords(" The roads were deserted");
console.log(newStory.addwords);
newStory.erase();

var toaster=function(){
    var inputVoltage=10;
    var ebBill=function(time){
        var bill=time*inputVoltage;
        console.log(bill);
    }
    return ebBill;
}

var estimation=toaster();
estimation(10);