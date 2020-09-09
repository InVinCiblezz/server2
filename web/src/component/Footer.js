import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
@inject("store")
@observer
export default class Footer extends Component
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
        return <div className="footer container">
            <div className="gray">
                - 方糖气球🎈荣誉出品 -
            </div>
        </div>;
    }
}