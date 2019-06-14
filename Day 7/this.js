function yo() {
    console.log('Yo, 我是' + this.name);
}

var whh = {
    name: 'whh',
}

var lsd = {
    name: 'lsd',
}

whh.yo = yo;
lsd.yo = yo;

whh.yo();
lsd.yo();

var person = {
        fname: 王,
        lname: 花花
    }
    // fullname: function( ) {
    //     console.log(this);
    //     return this.lname + this.fname;
    // }
var name = person.fullname;
console.log(person.fullname);

//动态赋能

function yo() {
    console.log("Yo");

}

var whh = {
    name: 'sdsd',
}

var lsdd = {
    name: 'lsd',
}

whh.yo();
lsd.yo();