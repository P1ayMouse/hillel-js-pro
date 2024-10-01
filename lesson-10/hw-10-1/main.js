let user = {
    name: "Alex",
    age: 21,
    location: "Kyiv",
    data () {
        return "Name - " + this.name + ";\n" +
            "Age - " + this.age + ";\n" +
            "Location - " + this.location + "."
    }
}

console.log(user.data());
