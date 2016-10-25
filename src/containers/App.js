/**
* 主体组件
**/


import React from 'react';


export default class App extends React.PureComponent {
    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}

