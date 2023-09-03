//check that property has in object
var obj = {
    x: 45,
    y: 56,
    z: 67
}
//console.log('x' in obj) // x has in obj ? //output true
//console.log('p' in obj) //output flase

for(var i in obj){
    console.log(i)
    console.log(i + ': '+ obj[i]) //output    x
                                           // x: 45
                                            //y
                                            //y: 56
                                            //z
                                            //z: 67
    
}
