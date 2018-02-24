export default function delReducer(state, action) {
    switch (action.type) {
      case 'DELUSER':
        console.log("删除"+action.state);
        del(action.state);
        return state;
      default:
        return 0;
    }
  }
  
  const del = (state) =>{
    fetch('http://localhost:8080/user/del/'+state,{
        method: 'GET'
    }).then(res=>{
        return res.text();
    }).then(text=>{
        console.log(text);
    })
  }