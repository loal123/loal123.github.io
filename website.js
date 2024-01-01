const openbutton = document.querySelector('.openbutton');
const opentest = document.querySelector('.opentest');

let counter = 0;
function addNum() {
    counter++;
    document.getElementById("number").textContent = counter;

}
function Reset() {
    counter = 0;
    document.getElementById("number").textContent = counter;
}
let have = true;
openbutton.addEventListener('click', () => {
    if (have) {
        opentest.style.height = '100px';
    }
    else opentest.style.height = '0px';

    have = !have;
})





