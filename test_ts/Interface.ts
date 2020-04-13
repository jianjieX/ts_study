// function printLabel(labelledObj:{label:string}){
// 	console.log(labelledObj.label);
// }
// let myObj={size:10,label:"Size 10 Object"};
// printLabel(myObj);
// interface LabelledValue{
// 	label:string
// }
// function printLabel(labelledObj:LabelledValue){
// 	console.log(labelledObj.label);
// }
// let myObj={size:10,label:'Size 10 object'};
// printLabel(myObj);
interface SquareConfig{
	color?:string;
	width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
	let newSquare={color:'White',area:100};
	if(config.color){
		newSquare.color=config.color;
	}
	if(config.width){
		newSquare.area=config.width*config.width;
	}
	return newSquare;
}
let mySquare=createSquare({color:'black'});
interface Point{
	readonly x:number;
	readonly y:number;
}
let p1:Point={x:10,y:20};
p1.x=5;
