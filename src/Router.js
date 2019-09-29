import React from 'react';
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";

function Home(){
    return(
        <div>
            首页
        </div>
    )
}

function User(){
    return(
        <div>
            用户
        </div>
    )
}

function Setting(){
    return(
        <div>
            设置
        </div>
    )
}


export default function Router(){
    return (
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/user'>用户</Link></li>
                <li><Link to='/setting'>设置</Link></li>   
            </ul>
            <Route path='/' exact component={Home}/>
            <Route path='/user' component={User}/>
            <Route path='/setting' component={Setting}/>
        </div>

        </BrowserRouter>
    )

}