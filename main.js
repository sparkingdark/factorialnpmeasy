const Factorial = (n)=>{
    var fact = 1
    for (let index = 1; index <= n; index++) {
        fact*=index
        
    }

    return fact

}



module.exports = Factorial