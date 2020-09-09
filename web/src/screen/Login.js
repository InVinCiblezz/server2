import React, { Component } from 'react';
import Hello from '../component/Hello';
import { inject } from 'mobx-react';
import { withRouter,Link } from 'react-router-dom';
import { Button, Intent, Spinner } from '@blueprintjs/core';
import SoloLayout from '../component/SoloLayout'

export default class Login extends Component
{
    render()
    {
        return <SoloLayout title='login'>
        login form
        </SoloLayout>;
    }
} 