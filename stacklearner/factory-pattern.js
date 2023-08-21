 //factory pattern, here createRect is a factory

var createRect = function(width, height){
    return {
        width: width,
        heigt: height,
    
        draw: function(){
            console.log('I am a rectangle')
            this.printProperties()
            console.log(this)
        },
        
        printProperties: function(){
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.heigt)
        }
     }
}
 
 var rect1 = createRect(34, 23)
 rect1.draw()
 
 var rect2 = createRect(42, 58)
 rect2.draw()

 var rect3 = createRect(42, 58)
 rect3.draw()
 