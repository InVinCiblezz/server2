import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter, NavLink } from 'react-router-dom';

@withRouter
@inject("store")
@observer
export default class TopMenu extends Component
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
            {
                this.props.store.top_menu_items && this.props.store.top_menu_items.map(
                    item => <div className="menu-item" key={item.link}><NavLink exact={true} to={item.link}>{item.text}</NavLink></div>
                )
            }
        

        </div>
    }
}