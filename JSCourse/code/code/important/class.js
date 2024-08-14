class NormalClass {
    constructor(id = -1) {
        this.id = id;
    }
    get userId() {
        return this.id;
    }
}

class Class extends NormalClass {
    constructor(name = "ali", id) {
        super(id);
        this.name = name;
    }
    sayHello() {
        return `hello ${this.name}, user id : ${super.userId}`;
    }
    static about() {
        return "this is static function";
    }
}
const user = new Class();
console.log(user.sayHello());
console.log(Class.about());