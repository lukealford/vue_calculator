export default {
    setDisplay(state, payload) {
        if(state.operatorActive){
            state.display = 0;
            state.operatorActive = false;
        }
        state.display = state.display === 0 ? (state.display = payload) : Number('' + state.display + payload); 
    },
    setOperator(state,payload) {
        state.operatorActive = true;
        switch(payload){
            case 'C':
                state.display = 0;
                break;
            case 'CE':
                state.display = 0;
                state.previous = null;
                state.operator = null
                break;
            case "+/-":
                state.display = state.display < 0 ? (state.display = state.display - state.display * 2) : (state.display = state.display - state.display * 2);
                break;
            case '.':
                console.log('complete this you derp')
                break;
            case '+':
                state.operator = (a, b) => a + b;
                break;
            case 'X':
                state.operator = (a, b) => a * b;
                break;
            case '/':
                state.operator = (a, b) => a / b;
                break;
            case '-':
                state.operator = (a, b) => a - b;
                break;
            case '%':
                state.display = state.display / 100;
                break;
            case '=':
                if(state.operator){
                    state.display = state.operator(Number(state.previous),Number(state.display));
                }
                break;
        }
        state.previous = Number(state.display)
    },
}