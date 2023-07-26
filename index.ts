// console.log("hello");
// throw new Error("error");
// console.log("login");
// alert("selam")

let a: any;
a = prompt("ismingiz nima edi?");
let b: any = document.getElementsByClassName("name")[0];

function Name(a: string) {
  let c: number = (a as string).length;
  if (c > 0) {
    b.innerHTML = a;
  } else {
    throw new Error("kkli content kiritilmadi");
  }
}
Name(a);
