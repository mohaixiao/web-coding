function foo() {
    setTimeout(() => {
        console.log('id;', this.id)
    }, 100);
}
var id = 21;
foo.call({ id: 42 })
function foo() {
    setTimeout(() => {
        console.log('id:', this.id)
    }, 100)
};
var id = 21;
foo();