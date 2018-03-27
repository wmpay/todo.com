export default {
  get: () => {
  	const headers = new Headers();
  	headers.append('Access-Control-Allow-Headers', '*');
  	headers.append('Content-Type', 'application/json');
  	const options = {
  		method: 'GET',
  		headers: headers,
  		mode: 'cors',
  	};
  	const request = new Request('http://localhost:9000/todo');
  	return fetch(request, options).then(response => {
  		return response.json();
  	});
  },
  post: (payload) => {
  },
  patch: (id, payload) => {
  },
  delete: (id) => {
    headers.append('Access-Control-Allow-Headers', '*');
  },
};