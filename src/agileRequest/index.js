import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';
import ajaxCall from './ajax';
import { of } from 'rxjs/observable/of';

const getRequest2 = actions => {
  console.log(actions);
  return actions.action.ofType(actions.epic).switchMap(() => {
    const call = ajax.get(actions.url, actions.header);
    const loading = of(actions.loading());

    return concat(
      loading,
      ajaxCall(
        call,
        actions.success,
        actions.cancel,
        actions.error,
        actions.retry,
      ),
    );
  });
};

const getRequest = actions => {
  const call = ajax.get(actions.url, actions.header);
  if (actions.loading === undefined) {
    console.error(
      'AgileRequest error: loading action is required for the standard request',
    );
  }
  return concat(
    of(actions.loading),
    ajaxCall(
      call,
      actions.success,
      actions.cancel,
      actions.error,
      actions.retry,
    ),
  );
};

const postRequest = actions => {
  const call = ajax.post(actions.url, actions.formBody, actions.header);
  return concat(
    of(actions.loading),
    ajaxCall(
      call,
      actions.success,
      actions.cancel,
      actions.error,
      actions.retry,
    ),
  );
};

const patchRequest = actions => {
  const call = ajax.patch(actions.url, actions.formBody, actions.header);
  return concat(
    of(actions.loading),
    ajaxCall(
      call,
      actions.success,
      actions.cancel,
      actions.error,
      actions.retry,
    ),
  );
};

const putRequest = actions => {
  const call = ajax.patch(actions.url, actions.formBody, actions.header);
  return concat(
    of(actions.loading),
    ajaxCall(
      call,
      actions.success,
      actions.cancel,
      actions.error,
      actions.retry,
    ),
  );
};

const deleteRequest = actions => {
  const call = ajax.delete(actions.url, actions.header);
  return concat(
    of(actions.loading),
    ajaxCall(
      call,
      actions.success,
      actions.cancel,
      actions.error,
      actions.retry,
    ),
  );
};

export {
  getRequest,
  getRequest2,
  postRequest,
  patchRequest,
  putRequest,
  deleteRequest,
};
