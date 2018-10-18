## RXJS Agile Request

A Reasonable complete task for http request, such as loading, success, error, cancel and retry handler.
Created by redux-obervable and rxjs.

A lazy utils request method for get, post, patch, put, and delete.

Please check the documentation here.

#### How to install?

`yarn add rxjs-agile-request`

#### How to use?

import your methods in request.

```
import {
  getRequest,
  postRequest,
  patchReuqest,
  putReuqest,
  deleteRequest,
} from 'rxjs-agile-request';
```

###### create a object action and pass it in the agileRequest method

```
const getBlogUrl = `${jsonplacehoder}/posts21`;
export const getBlogEpic = action$ =>
  action$.ofType(TYPES.GET_BLOG_EPIC).switchMap(() => {
    const loading = ACTION.getBlogLoading();
    const success = ACTION.getBlogSuccess;
    const cancel = ACTION.getBlogCancel
    const error = ACTION.getBlogError;

    const ObjectActions = {
      url: getBlogUrl,
      headers,
      loading,
      success,
      cancel,
      error,
      retry: error => {
        return 404 === error.status;
      },
    };

    return getRequest(ObjectActions);
  });
```

#### Actions

| Actions |   TYPE   |                                                        DESCRIPTION                                                        |
| ------- | :------: | :-----------------------------------------------------------------------------------------------------------------------: |
| loading | required |                                                      return boolean                                                       |
| success | required |                                                       return object                                                       |
| error   | required |                                                       return object                                                       |
| cancel  | optional |                                return nothing just is this action to componentWillUnmount                                 |
| retry   | optional | is a function that as a callback of object of error, it must return a boolean so the agileRequest wil know where to retry |

# License

Main contributors:

- [Justin Lazaro (juztinlazaro)](https://github.com/juztinlazaro)
- [Chelzea Louise Salvador (nichoguimbaolibot)](https://github.com/chlzslvdr) - documentations
- [Nicho Guimbaolibot (nichoguimbaolibot)](https://github.com/nichoguimbaolibot) - for the project name.
