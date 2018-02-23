import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class UserList extends Component{

       componentDidMount(){
            alert("发送请求");
       }; 
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
               </table>
           </div>)
       }
}