// 1、布尔
var isDone = false;
console.log(isDone); //false
//2、数字
var intNum = 6; //6
var hexNum = 0xf00d; //61453
var binaryNum = 10; //10
var octalNum = 484; //484
console.log(intNum, hexNum, binaryNum, octalNum);
//3、字符串
var myName = 'sjj';
myName = 'dyq';
console.log(myName);
var yourName = 'dyq11';
var age = 23;
var sentence = "\u6211\u77E5\u9053\u4F60\u662F" + yourName + " ,\u4F60\u5DF2\u7ECF " + age + "\u5C81\u4E86";
console.log(sentence);
//4、数组
var list = [1, 2, 3];
var vice_list = [1, 2, 3];
console.log(list, vice_list);
//5、元组
var x;
x = ['hello', 10];
console.log(x);
//6、枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(c, colorName);
//7、any
var notSure = 4;
notSure = '不知道什么属性';
notSure = true;
console.log(notSure);
var new_list = [1, true, 'free'];
new_list[1] = 100;
console.log(new_list); //[ 1, 100, 'free' ]
//8、void
// 与any相反，当函数没有返回值时，其返回值类型是void，void只能声明undefined和null
// 9、null和undefined
//10、never ☞永不存在的值的类型
