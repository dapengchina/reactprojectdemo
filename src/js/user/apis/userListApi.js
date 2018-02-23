import 'whatwg-fetch';


fetch('/users', {
    method: 'GET'
}).then(res => {
    return res.json;
})