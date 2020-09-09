import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { Divider} from "@blueprintjs/core";
import { H3, H2 } from "@blueprintjs/core";
import TopMenu from "../component/TopMenu"
import UserMenu from "../component/UserMenu"

@withRouter
@inject("store")
@observer
export default class TopNav extends Component {
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

  render() {
    return <div className="top-nav">
      <div className="container">
        <div className="left">
          <div className="logo">
            <H2>Server 2.0</H2>
          </div>
          <TopMenu/>
        </div>
        <div className="right">
          <H3><UserMenu/></H3>
        </div>
      </div>
      
    </div>
  }
}
