function speakersReducer(state = [], action) {
    switch (action.type) {
        case 'RECIEVE_SPEAKERS':
            return action.payload;
        default:
            return state;
    }
  }

  export default speakersReducer;
