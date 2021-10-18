
var count = 0;
var data = [
    {
        'Name' : 'Apple',
        'Price' : 50
    },
    {
        'Name' : 'Water',
        'Price' : 20
    },
    {
        'Name' : 'Nokia 3310',
        'Price' : 2020
    }
]
var find = function(){
    var ret =  data[count].Name + ' is worth ' + data[count].Price;
    document.getElementById("result").innerHTML = ret;
    count++;
}

var def = function(){    
    setTimeout(() => {
        console.log('Anubhav');
    }, 3000);
}
var inc = function(){
    var x = parseInt(document.getElementById("mynum").innerHTML);
    x += 1;
    if(x<10) document.getElementById("mynum").innerHTML = x;
}

var dec = function(){
    var x = parseInt(document.getElementById("mynum").innerHTML);
    x -= 1;
    if(x>-1) document.getElementById("mynum").innerHTML = x;
}
var inc_app = function(){
    var x = parseInt(document.getElementById("quan_app").innerHTML);
    x += 1;
    if(x<10) document.getElementById("quan_app").innerHTML = x;
    document.getElementById("amount_app").innerHTML = x*parseInt(document.getElementById("price_app").innerHTML);
}

var dec_app = function(){
    var x = parseInt(document.getElementById("quan_app").innerHTML);
    x -= 1;
    if(x>-1){
        document.getElementById("quan_app").innerHTML = x;
        document.getElementById("amount_app").innerHTML = x*parseInt(document.getElementById("price_app").innerHTML);
    }
}