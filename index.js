// console.log("hello");
// throw new Error("error");
// console.log("login");
// alert("selam")
var a;
a = prompt("ismingiz nima edi?");
var b = document.getElementsByClassName("name")[0];
function Name(a) {
    var c = a.length;
    if (c > 0) {
        b.innerHTML = a;
    }
    else {
        throw new Error("kkli content kiritilmadi");
    }
}
Name(a);
