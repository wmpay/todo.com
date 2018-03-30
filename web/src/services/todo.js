export default {
  get: (filter) => {
    let url;
    if (filter) {
      url = '/api/todo?filter=' + filter; 
    } else {
      url = '/api/todo';
    }
    return fetch(url).then(response => {
      return response.json();
    });
  },
  post: (payload) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'POST',
      headers: headers,
      body: payload,
    };
    const request = new Request('/api/todo');
    return fetch(request, options);
  },
  patch: (id, payload) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'PATCH',
      headers: headers,
      body: payload,
    };
    const request = new Request('/api/todo/' + id);
    return fetch(request, options);
  },
  delete: (id) => {
    const options = {
      method: 'DELETE',
    };
    const request = new Request('/api/todo/' + id);
    return fetch(request, options);
  },
};