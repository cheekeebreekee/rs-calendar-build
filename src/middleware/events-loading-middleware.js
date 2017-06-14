import parseResponse from './../parse-response';
import status from './../status';

function eventsLoadingMiddleware({ getState, dispatch}) {
    return (next) => (action) => {
        let url;
        if (action.type === "UPLOAD_DATA") {
            url = 'http://128.199.53.150/events';
            fetch(url)
                .then(status)
                .then(parseResponse)
                .then((responseData) => {
                    dispatch({ type: 'RECIEVE_DATA', payload: responseData });
            });
        }
        return next(action);
    }
}

export default eventsLoadingMiddleware;
