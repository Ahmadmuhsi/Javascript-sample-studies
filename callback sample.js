

/*var dt=new Date()

console.log("hello")

for(i=0;i<100;i++){
    console.log("loop")

}
console.log("end")
var diff=new Date()-dt
console.log(diff)*/



function longTask(milliSecondsTime){
    dt=new Date()
    while((new Date-dt) <= milliSecondsTime){

    }
}

/*console.log('started') // synchorones
longTask(1000)
console.log('end')



console.log('started')
longTask(1000)
console.log('end')




console.log('started')
longTask(1000)
console.log('end')*/


function showEnd(){     //asychoronos
    console.log("end")
}         

console.log("started")
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)

