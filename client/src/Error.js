import React, { Component } from 'react';
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<h2>Error : Path not Found</h2>);
    }
}

export default Error;