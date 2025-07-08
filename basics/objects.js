// singleton

// objects literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Rohit",
    "full name": "Rohit Rai",
    [mySym] : "key1",
    age: 24,
    location: "Delhi",
    email: "rohit@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser.name);
// console.log(JsUser[mySym])

JsUser.email = "rohit@google.com";
// Object.freeze(JsUser);
JsUser.email = "rohit@microsoft.com";
console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello user");
}


JsUser.greetingTwo = function() {
    console.log(`Hello user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());