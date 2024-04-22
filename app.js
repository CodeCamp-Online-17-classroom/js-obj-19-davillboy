// write code here
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // *

ผลลัพธ์
Joe 
ภายในฟังก์ชัน makeUser() this จะไม่ได้ชี้ไปที่ user ที่ถูกสร้างขึ้น แต่จะชี้ไปที่ window object
ดังนั้น ref จะเก็บค่า this ที่ชี้ไปที่ window object ซึ่งมี name เป็น 'Joe'
