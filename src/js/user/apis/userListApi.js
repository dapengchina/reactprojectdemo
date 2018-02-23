import 'whatwg-fetch';

getUserList =>{
   
    fetch('http://localhost:8080/user/query', {
        method: 'GET'
    }).then(res => {
        console.log("结果"+res.json);
        return res.json;
    })
}
