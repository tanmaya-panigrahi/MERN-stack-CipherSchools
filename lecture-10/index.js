// let person={
//     firstName: 'John',
//     lastName: 'Doe',
//     getfullname: function(){
//         return `the name os the person is : ${this.firstName} ${this.lastName}`;
//     },
//     phoneNumber:{
//         home: '123456',
//         work: '789456'
//     },

// }
// console.log(person.getfullname());
// console.log(person.phoneNumber.home);


// function person(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
// }
// let person1=new person('john','doe');
// let person2=new person('jane','doe');
// console.log(person1);
// console.log(person2);

// const coder={
//     isStudying:false,
//     printIntroduction:function(){
//         console.log("my name is"+this.name+".am i studying?"+this.isStudying+".");
//     }
// }
// const me=Object.create(coder);
// me.name="john";
// me.isStudying=true;
// me.printIntroduction();
// console.log(me);

// const you=Object.create(coder);
// you.name="jane";
// you.isStudying=false;
// you.printIntroduction();


// class vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails(){
//         return `the name of the vehicle is ${this.name}`;
//     }
// }
// let car=new vehicle('toyota','toyota','petrol');
// console.log(car.name);
// console.log(car.getDetails());


// function vehicle(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }
// vehicle.prototype.getDetails=function(){
//     return `the name of the vehicle is ${this.name}`;
// }

// let car=new vehicle('toyota','toyota','petrol');
// console.log(car.name);

// console.log(car.getDetails());


class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
        let getDetails_NoAccess=function(){
            return `the name of the person is ${this.firstname} ${this.lastname}`;
        }

        this.getDetails_Access=function(){
            return `the name of the person is ${this.firstname} ${this.lastname}`;
        
        }
    }
    
    
}

let p1=new person('john','doe');
console.log(p1.firstname);
console.log(p1.getDetails_Access());
console.log(p1.getDetails_NoAccess());
``

