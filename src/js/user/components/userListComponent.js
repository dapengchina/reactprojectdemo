import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import action from '../utils/actionDispatchUtil';

var userListBefore=new Array();
export default class UserList extends Component{ 
      getInitialState() {
        var userListBefore=new Array();
        return userListBefore;
      }
      componentDidMount (){
        fetch('http://localhost:8080/user/query',{
            method: 'GET'
        }).then(res=>{
            return res.json();
        }).then(json=>{
            this.setState(
                userListBefore=json.data
            );
        })
       }
       render(){
           return(
           <div>
               <table border="1" width="100%">
                 <tr>
                     <td>ID</td>
                     <td>UserName</td>
                     <td>pwd</td>
                     <td>Operate</td>
                 </tr>
                 {userListBefore!=null?userListBefore.map(
                    function(item){
                      return <tr>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>
                                <a onClick={()=>action(item.id,'DELUSER')}>删除</a>
                                    &nbsp;&nbsp;
                                    修改
                                </td>
                              </tr>
                    }
                 ):""}
                   
               </table>
           </div>)
       }
}