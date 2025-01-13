function greet(prompt){
    console.log(prompt)
}

function add(a,b){
    return a+b
}

greet("Hello "+add(2000,25))

var avg = (a,b)=>{
    return (a+b)/2
}


greet(avg(12,14))