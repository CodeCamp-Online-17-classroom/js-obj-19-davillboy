# js-lab-65
### Lab65 Object: Guess Result4
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```JavaScript
var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // *
```
