import React, { Component } from 'react';
import _ from "lodash";

export default class NavBar extends Component {
    showMenu(e){
        console.log(this)
        console.log("showMenu");
    }
    hideMenu(){
        console.log("hideMenu")
    }
    genaretorMenu(){
        // return (
        //     <ul className="nav navbar-nav">
        //         <li className=""><a href="#/">首页</a></li>
        //         <li className="active dropdown">
        //             <a href="#/">内容管理</a>
        //             <ul className="dropdown-menu">
        //                 <li>文章管理</li>
        //                 <li>分类管理</li>
        //             </ul>
        //         </li>
        //         <li><a href="#/">权限管理</a></li>
        //     </ul>
        // )
        let { navData } = this.props;
        let nav = navData.map((item, index) => {
            let children;
            if (!_.isEmpty(item.child)) {
                children = (
                    <ul className="dropdown-menu">
                        {
                            item.child.map((item, index) => {
                                return (
                                    <li key={index}><a href="#/">{item.name}</a></li>
                                )
                            })
                        }
                    </ul>
                )
            }
            return (
                <li className={_.isEmpty(item.child) ? "" : "dropdown"} 
                    key={index}
                    onMouseOver={this.showMenu}
                    onMouseOut={this.hideMenu}>
                    <a href={"#/" + item.href}>{item.name}</a>
                    { children }
                </li>
            );
        });

        return ( 
            <ul className="nav navbar-nav">
                { nav } 
            </ul>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#/">Brand</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        { this.genaretorMenu() }
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.defaultProps = {
    navData: []
}