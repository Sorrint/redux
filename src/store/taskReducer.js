import { taskDeleted, taskUpdated } from './actionTypes';

export function taskReducer(state = {}, action) {
    let newArray;
    let elementIndex;
    switch (action.type) {
        case taskUpdated:
            newArray = [...state];
            elementIndex = newArray.findIndex((el) => el.id === action.payload.id);
            newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
            return newArray;

        case taskDeleted:
            newArray = [...state];
            elementIndex = newArray.findIndex((el) => el.id === action.payload.id);
            newArray.splice(elementIndex, 1);
            return newArray;
        default:
            return state;
    }
}
