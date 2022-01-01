// var i 
// (function (){
// 	for(i=0;i<10;i++){
// 		console.log(i) //
// 	}
// })()
// console.log(i)
// var a = [];
// for (let i = 0; i < 10; i++){
//     a[i] = function(){
//         console.log(i);
//     }
// }
// a[6]();  // 6

this.color = "red";
let color = "green";
let obj = {
　　color: "blue"
};
let objA = {
	　　color: "dsa"
	};
let sayColor = () => console.log(this.color);
	
let sayColor2 = function(str){
	console.log(this.color, str);
} 
sayColor.apply(obj);//red
let saycolor3 = sayColor2.bind(objA, 'hui', 'asd');//blue

saycolor3()