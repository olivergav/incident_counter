let store = [];
const MAGIC = 'MAGIC';


function reducer(state, action) {
    if (action.type === MAGIC) {
        return [...state, action.payload]
    }
    return state;
}

function dispatch(action) {
    if (typeof action === 'function') {
        action(dispatch);
    } else {
        store = reducer(store, action);
    }
}

const action1 = {
    type: MAGIC,
    payload: {answer: 42}
}

dispatch(action1);
dispatch(action1);
dispatch(action1);

const doMagic = (dispatch_) => {
    setTimeout(() => {
        dispatch_({
            type: MAGIC,
            payload: {magic: false}
        })
    }, 100)
}

dispatch(doMagic)

setTimeout(() => {
    console.log(store);
}, 100)


// const upper = (text) => {
//     return text[0].toUpperCase() + text.slice(1);
// }
//
// const reverse = (text) => {
//     return text.split('').reverse().join('');
// }
//
// const createSentence = (text, fn) => {
//     return fn(text);
// }

// console.log(createSentence(upper('ala ma kota'), reverse));
// console.log(createSentence(reverse('ala ma kota'), upper));

// function notThunk() {
//     return function thunk() {
//
//     }
// }
