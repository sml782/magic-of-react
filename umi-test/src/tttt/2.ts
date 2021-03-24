import produce from 'immer';

const baseState = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
]

const nextState = produce(baseState, draftState => {
  draftState.push({ todo: 'Tweet about it', done: false });
  draftState[1].done = true;
});

const nextStateCallback = produce(baseState => {
  baseState[0].todo = '1';
});

const nextnextState = nextStateCallback(baseState);

console.log(baseState, nextState, nextnextState);
