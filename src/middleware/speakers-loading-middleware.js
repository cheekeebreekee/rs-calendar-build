import parseResponse from './../parse-response';
import status from './../status';

function speakersLoadingMiddleware({ getState, dispatch}) {
    return (next) => (action) => {
        let url;
        if (action.type === "UPLOAD_SPEAKERS") {
            url = 'http://128.199.53.150/trainers';
            fetch(url)
                .then(status)
                .then(parseResponse)
                .then((responseData) => {
                    dispatch({ type: 'RECIEVE_SPEAKERS', payload: responseData });
            });
        }
        return next(action);
    }
}

export default speakersLoadingMiddleware;
