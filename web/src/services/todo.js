export default {
  get: (filter) => {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
    };
    let url;
    if (filter) {
      url = 'http://localhost:9000/todo?filter=' + filter; 
    } else {
      url = 'http://localhost:9000/todo';
    }
    const request = new Request(url);
    return fetch(request, options).then(response => {
      return response.json();
    });
  },
  post: (payload) => {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      body: payload,
    };
    const request = new Request('http://localhost:9000/todo');
    return fetch(request, options);
  },
  patch: (id, payload) => {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'PATCH',
      headers: headers,
      mode: 'cors',
      body: payload,
    };
    const request = new Request('http://localhost:9000/todo/' + id);
    return fetch(request, options);
  },
  delete: (id) => {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', '*');
    const options = {
      method: 'DELETE',
      headers: headers,
      mode: 'cors',
    };
    const request = new Request('http://localhost:9000/todo/' + id);
    return fetch(request, options);
  },
};