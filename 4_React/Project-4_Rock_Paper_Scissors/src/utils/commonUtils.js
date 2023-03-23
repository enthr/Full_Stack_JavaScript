export const randomAction = () => {
    const actions = ['rock', 'paper', 'scissors'];
    const move = Math.floor(Math.random() * actions.length);
    return actions[move];
};

export const checkWinner = (action1, action2) => {
    if (action1 === action2) return 'draw';
    if (action1 === 'rock') {
        if (action2 === 'paper') return 'lose';
        if(action2 === 'scissors') return 'win';
    }
    if (action1 === 'paper') {
        if (action2 === 'scissors') return 'lose';
        if (action2 === 'rock') return 'win';
    }
    if (action1 === 'scissors') {
        if (action2 === 'rock') return 'lose';
        if (action2 === 'paper') return 'win';
        
    }
    return;
};