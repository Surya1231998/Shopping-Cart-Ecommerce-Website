


const initialState = [];

for(let i=0;i<=35;i++)
{
initialState[i] =0;
}

let newstate = [];

export const changeTheNumber = ( state = initialState, actions) => {

    switch (actions.type) {
        case "INCREMENT":
            //state[actions.ind]++;
             newstate = [...state];
            newstate[actions.ind]++;
            return newstate;
            break;
        case "DECREMENT":
             newstate = [...state];
            newstate[actions.ind]--;
            return newstate;
            break;
        default:
           
            return state;
           
            break;
    }
}

export default  changeTheNumber

