import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import TopNav from '../component/TopNav'
import Footer from '../component/Footer'
import DocumentTitle from 'react-document-title'

@withRouter
@inject("store")
@observer
export default class SoloLayout extends Component
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
        const main = this.props.children ? this.props.children : null;
        const title = this.props.title || 'Server 2.0';
        return <DocumentTitle title = {title}>
            <>
            <TopNav/>
            <div className="main-page container">{main}</div>
            <Footer/>
            </>
        </DocumentTitle>;
    }
}