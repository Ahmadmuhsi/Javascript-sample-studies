function Person(name,age,place){
this.name=name
this.age=age
this.place=place
this.display=function(){
    console.log("name: "+this.name+ " Age: "+this.age+ " place: "+this.place)
}
}


var dilshad=new Person("Dilshad",20,"calicut")
var ahmad=new Person("ahmad",19,"ksrd")


dilshad.display()
ahmad.display()
