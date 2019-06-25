var calculator = new Vue({
    el: '#calculator',
    data: {
        inputShow: {
            value: '0',
            name: ''
        },
        string: [],
        type: ''
    },
    components: {
        'input-box': {
            props: ['inputShow'],
            computed: {
                value: function() {
                    return this.inputShow.value
                }
            },
            template: '<input id="input-box" type="text" size="21" maxlength="21" v-model="value" readonly="readonly">'
        },
        'btn-list': {
            template: '<div id="btn-list"><slot></slot></div>'
        }
    },
    methods: {
        result: function(value) {
            var result = new Array;
            if (value.length % 2 == 0) {
                result.push((value[value.length - 2]));
                result.push((value[value.length - 1]));
                return (result);
            } else {
                result.push((value[value.length - 1]))
                result.push((value[value.length - 2]))

                return (result);
            }
        },
        typetoinput: function(num) {
            input = this.inputShow
            if (input.name == "type") {
                input.value = " ";
                input.name = " ";
            }
            if (num != "." && input.value[0] == 0 && input.value[1] != ".") {
                input.value = num; //Reset input num
            } else if (num == "." && input.value.indexOf(".") > -1) {
                input.value = input.value; //Only one point allow input
            } else if (input.value == "Infinity" || input.value == "NaN") {
                input.value = "";
                input.value += num; //Splicing string
            } else {
                input.value += num;
            }
        },
        operator: function(type) {
            // alert(this.inputShow)
            // alert(this.string)
            // alert(this.type)
            switch (type) {
                case "clear":
                    this.inputShow.value = "0";
                    this.string.length = 0;
                    /*document.getElementById("ccc").innerHTML="";
                     for(i=0;i<this.string.length;i++)
                     {
                     document.getElementById("ccc").innerHTML+=this.string[i]+" "
                     }*/
                    break;
                case "backspace":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.inputShow.value = this.inputShow.value.replace(/.$/, '');
                        if (this.inputShow.value == "") {
                            this.inputShow.value = "0";
                        }
                    }
                    break;
                case "opposite":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.inputShow.value = -this.inputShow.value;
                    }
                    break;
                case "percent":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.inputShow.value = this.inputShow.value / 100;
                    }
                    break;
                case "pow":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.inputShow.value = Math.pow(this.inputShow.value, 2);
                    }
                    break;
                case "sqrt":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.inputShow.value = Math.sqrt(this.inputShow.value);
                    }
                    break;
                case "plus":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.string.push(this.inputShow.value);
                        this.type = "plus"
                        this.inputShow.value = "+";
                        this.inputShow.name = "type";
                    }
                    break;
                case "minus":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.string.push(this.inputShow.value);
                        this.type = "minus"
                        this.inputShow.value = "-";
                        this.inputShow.name = "type";
                    }
                    break;
                case "multiply":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.string.push(this.inputShow.value);
                        this.type = "multiply"
                        this.inputShow.value = "×";
                        this.inputShow.name = "type";
                    }
                    break;
                case "divide":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.string.push(this.inputShow.value);
                        this.type = "divide"
                        this.inputShow.value = "÷";
                        this.inputShow.name = "type";
                    }
                    break;
                case "result":
                    if (this.checknum(this.inputShow.value) != 0) {
                        this.string.push(this.inputShow.value);
                        if (parseInt(this.string.length) % 2 != 0) {
                            this.string.push(this.string[this.string.length - 2])
                        }
                        if (this.type == "plus") {
                            this.inputShow.value = parseFloat(this.result(this.string)[0]) + parseFloat(this.result(this.string)[1]);
                            this.inputShow.name = "type"
                        } else if (this.type == "minus") {
                            this.inputShow.value = parseFloat(this.result(this.string)[0]) - parseFloat(this.result(this.string)[1]);
                            this.inputShow.name = "type"
                        } else if (this.type == "multiply") {
                            this.inputShow.value = parseFloat(this.result(this.string)[0]) * parseFloat(this.result(this.string)[1]);
                            this.inputShow.name = "type"
                        } else if (this.type == "divide") {
                            this.inputShow.value = parseFloat(this.result(this.string)[0]) / parseFloat(this.result(this.string)[1]);
                            this.inputShow.name = "type"
                        }
                        break;
                    }

            }
        },
        checknum: function(inputvalue) {
            if (inputvalue == "+" || inputvalue == "-" || inputvalue == "×" || inputvalue == "÷" || input.value == "0") {
                return 0;
            }
        }

    }
})