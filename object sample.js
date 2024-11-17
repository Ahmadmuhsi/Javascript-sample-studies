var Person={name:"Muhsi",age:19,place:"Adyanadka",display:function(){
    var name='muhammad'
    console.log(this.name)
}}

/*for(x in Person){
    console.log(Person[x])


}*/


Person.dob="20-10-2000"


Person.displayAge=function(){ 
    console.log(this.age)
}


console.log(Person.displayAge())