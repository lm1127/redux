export function Add (text) {
    return {
        type: 'ADD',
        text
    }
};

export function Remove (index) {
    return {
        type: 'REDUCE',
        index
    }
};
