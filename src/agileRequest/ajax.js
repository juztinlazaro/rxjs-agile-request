import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

const ajaxCall = (ajaxreq, success, cancel, error, retry) => {
  if (cancel === undefined) {
    console.warn(
      'AgileRequest warn: its nice if you have a cancel action in your request',
    );
  }

  if (retry === undefined) {
    console.warn(
      'AgileRequest warn: its nice if you have a retry action in your request',
    );
  }

  let requestError;
  return ajaxreq
    .takeUntil(cancel)
    .flatMap(result => {
      return success.map(s => {
        return s(result.data)
      });
    })
    .retryWhen(error => {
      return (
        error
          .flatMap(error => {
            requestError = error;
            if (retry !== undefined) {
              /*
            if you have error status retry
          */
              if (retry(error)) {
                return of(error.status);
              }
              return _throw(error.status);
            } else {
              /* 
            else all error will retry 
          */
              return of(error.status);
            }
          })
          // we decide to retry 5x
          .take(5)
          .concat(_throw('Sorry, there was an error (after 5 retries)'))
      );
    })
    .catch(message => {
      const err = {
        requestError,
        message,
      };
      return of(error(err));
    });
};

export default ajaxCall;
