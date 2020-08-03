/* 
  核心要点: 原型链的向上查找
*/
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if (proto == null) return false;
    if (proto == right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
// function myInstanceOf(left, right) {
//   let proto = Object.getPrototypeOf(left);
//   while(true) {
//     if(proto == null) return false;
//     if(proto === right.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   }
// }
function instanceof(left, right) {
  let proto = Object.getPrototypeOf(left); // 返回left的prototype属性
  while(true) {
    if (proto === null) return false; // 如果是空的就返回false
    if (proto === right.prototype) return true; // 如果等于右边的prototype属性，函数才拥有prototype属性
    proto = Object.getPrototypeOf(proto); // 原型链的向上查找
  }
}