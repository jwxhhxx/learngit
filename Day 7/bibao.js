//闭包 closure

function user(name) {
    var age, sex;
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            age = newAge;
        },
        getSex: function() {
            return sex;
        },
        setSex: function(newSex) {
            sex = newSex;
        }
    }
}

var whh = user('王花花');
whh.setSex('女');
whh.setAge(22);
var name = whh.getName();
var sex = whh.getSex();
var age = whh.getAge();
console.log(name, sex, age);