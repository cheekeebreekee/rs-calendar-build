function calendarReducer(state = [], action) {
    switch (action.type) {
        case 'RECIEVE_DATA':
            return action.payload;
        default:
            return state;
    }
  }

  export default calendarReducer;
