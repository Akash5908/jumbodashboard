const data = []

const changeTheTour = (state = data, action) => {
    switch (action.type) {
        case "GET_DATA" : return action.payload;
       
        default: return state;
    }
}
export default changeTheTour;