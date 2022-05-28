console.log('Test this works');
        //comment
        alert('Hello there');

let name = 'Zoran';
console.log(name);

let x;


document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 21) + 1;


    document.getElementById("xlabel").innerHTML = x;

}