import React, { Component } from 'react';
import Hello from '../component/Hello';
import { inject } from 'mobx-react';
import { withRouter,Link } from 'react-router-dom';
import { Button, Intent, Spinner } from '@blueprintjs/core';
import SoloLayout from '../component/SoloLayout';
import QRCode from 'qrcode.react';

@withRouter
@inject('store')
export default class Login extends Component
{
    state = {"qrcode": false};
    async componentDidMount()
    {
        const ret = await this.props.store.get_qrcode();
        //console.log(ret);
        if (ret && ret.url) 
        {
            this.setState({"qrcode":ret.url});
        }
    }
    render()
    {
        return <SoloLayout title='login'>
        <div className="code-box">
            {this.state.qrcode ? 
            <>
                <QRCode value={this.state.qrcode} />
                <div className="gray subtitle">please use Wechat to scan QR code</div> 
            </>
            : <Spinner/> }

        </div>
        </SoloLayout>;
    }
} 