import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import JQuery from 'jquery';
import UserListLoad from './userListLoadingComponent';

import action from '../utils/actionDispatchUtil';

var userListBefore=new Array();
export default class UserList extends Component{ 
      constructor(props) {
        super(props);
        this.state = {
          loading:true
        };
      }
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
            userListBefore=json.data;
            this.setState(
                {
                    loading:false
                }
            );
        })
       }
       render(){
           return(
           <div>
               {
          this.state.loading
          ? <div id="loadData">
             <UserListLoad></UserListLoad>
            </div>
          : <div id="userData">
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
               </div>
               }</div>)
       }
}