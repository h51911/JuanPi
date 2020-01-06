import React from 'react';

export function withStorage(InnerComponent) {
    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
    }

    return class OuterComponent extends React.Component {
        render(){
            return <InnerComponent {...this.props} user={user}>{this.props.children}</InnerComponent>
        }
    }
}