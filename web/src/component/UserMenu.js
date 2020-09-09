import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter , NavLink} from 'react-router-dom';

@withRouter
@inject("store")
@observer
export default class UserMenu extends Component
{
    // constructor(props) 
    // {
    //     super(props);
    // }
    
    // componentDidMount()
    // {
    //    // 
    // }

    // componentDidUpdate(prevProps)
    // {
    //     if (this.props.data !== prevProps.data) 
    //     {
           
    //     }
    // }
    
    render()
    {
        return <div className="top-menu">

            <div className="menu-item" key="/login"><NavLink exact={true} to="/login">login</NavLink></div>
        </div>
    }
}