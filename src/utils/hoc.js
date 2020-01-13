import React from 'react';

export function withStorage(InnerComponent) {
    let user = localStorage.getItem('username') ? localStorage.getItem('username') : '';

    return class OuterComponent extends React.Component {
        render() {
            return <InnerComponent {...this.props} user={user}>{this.props.children}</InnerComponent>
        }
    }
}