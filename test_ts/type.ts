// 1、布尔
let isDone:boolean=false;
console.log(isDone); //false
//2、数字
let intNum:number=6; //6
let hexNum:number=0xf00d; //61453
let binaryNum:number=0b1010; //10
let octalNum:number=0o744; //484
console.log(intNum,hexNum,binaryNum,octalNum);
//3、字符串
let myName:string='sjj';
myName='dyq';
console.log(myName);
let yourName='dyq11';
let age:number=23;
let sentence:string=`我知道你是${yourName} ,你已经 ${age}岁了`;
console.log(sentence);
//4、数组
let list:number[]=[1,2,3];
let vice_list:Array<number>=[1,2,3];
console.log(list,vice_list);
//5、元组
let x:[string,number];
x=['hello',10];
console.log(x);
//6、枚举
enum Color {Red=1,Green,Blue}
let c:Color=Color.Green;
let colorName:string=Color[2];
console.log(c,colorName);
//7、any
let notSure:any=4;
notSure='不知道什么属性';
notSure=true;
console.log(notSure);
let new_list:any=[1,true,'free'];
new_list[1]=100;
console.log(new_list); //[ 1, 100, 'free' ]
//8、void
// 与any相反，当函数没有返回值时，其返回值类型是void，void只能声明undefined和null
// 9、null和undefined
//10、never ☞永不存在的值的类型