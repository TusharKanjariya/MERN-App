import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            branch: ' ',
            sem: ' '
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData = (e) => {
        e.preventDefault();
        if (this.state.name == " " || this.state.branch == " " || this.state.sem == " ") {
            alert("Please fill Valid Details");
        } else {
            axios.post(`http://localhost:1234/add`, this.state)
                .then(res => {
                    const status = res.data;
                    alert(status.status);
                })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <form className="bg-light p-3 shadow-sm" onSubmit={this.sendData}>
                            <div className="form-group">
                                <label htmlFor="name">Student Name</label>
                                <input type="text" name="name" onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Name" />
                                {this.state.name ? '' : <small className="form-text text-danger">Enter Name</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="branch">Student Branch</label>
                                <input type="text" name="branch" onChange={this.handleChange} className="form-control" id="branch" placeholder="Branch e.g. CE, Mech" />
                                {this.state.branch ? '' : <small className="form-text text-danger">Enter Branch</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="sem">Semester</label>
                                <input type="number" name="sem" onChange={this.handleChange} placeholder="Semester" className="form-control" id="sem" max="8" min="1" />
                                {this.state.sem ? '' : <small className="form-text text-danger">Enter Semester</small>}
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Add Student" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;