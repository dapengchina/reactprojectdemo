import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getUserList from '../apis/userListApi'
import 'whatwg-fetch';

var userListBefore=new Array();
export default class UserList extends Component{
      componentWillMount (){
        fetch('http://localhost:8080/user/query',{
            method: 'GET'
        }).then(res=>{
            return res.json();
        }).then(json=>{
            userListBefore=json.data;
            console.log(userListBefore.length);
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
                
                             <tr>
                                     <td>{userListBefore!=null?userListBefore.length:""}</td>
                                     <td>dd</td>
                                     <td>dd</td>
                                     <td>dd</td>
                                   </tr>  
                 
               </table>
           </div>)
       }
}