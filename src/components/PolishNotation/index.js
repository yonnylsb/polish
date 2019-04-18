export default class PolishNotation {
    constructor () {
        this.buildNPI = 0;
    }

    attachEvents(){
        const npiInput = document.querySelector('#npi');

        const me = this;

        npiInput.addEventListener('keyup', function(e){
            me.getPolish(e.target.value);
        })
    }

    getPolish(value) {
        const npiOutput = document.querySelector('#npiValue');
        const operate = this.operate(value);
        npiOutput.innerHTML = operate[0];
    }

    operate(value) {
        let values = Array.isArray(value) && value || value.split('');

        values.some((value, index) => {
            let validIndex;

            switch (value) {
                case '*':
                    validIndex = ((index-2)>-1) ? (index-2) : null;

                    (validIndex !== null) && values.splice((index - 2), 3, Number(values[index-1]) * Number(values[index-2]));

                    (validIndex !== null) && this.operate(values);
                    break;
                case '+':
                    validIndex = ((index-2)>-1) ? (index-2) : null;

                    (validIndex !== null) && values.splice((index - 2), 3, Number(values[index-1]) + Number(values[index-2]));

                    (validIndex !== null) && this.operate(values);
                    break;
                case '-':
                    validIndex = ((index-2)>-1) ? (index-2) : null;

                    (validIndex !== null) && values.splice((index - 2), 3, Number(values[index-1]) - Number(values[index-2]));

                    (validIndex !== null) && this.operate(values);
                    break;
                case '/':
                    validIndex = ((index-2)>-1) ? (index-2) : null;

                    (validIndex !== null) && values.splice((index - 2), 3, Number(values[index-1]) / Number(values[index-2]));

                    (validIndex !== null) && this.operate(values);
                    break;
                default:
                    break;
            }
        });

        return values;
    }

    render(){
        return (`
            <div> 
                <h4>Insert NPI</h4>
                <input type="text" id="npi">
                <p id="npiValue"></p>
            </div>
        `)
    }
}