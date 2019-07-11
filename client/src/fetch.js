import React, { Component } from 'react';
import axios from 'axios';

class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    getData = () => {
        axios.get(`http://localhost:1234/`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({ persons });
            })
    }

    componentDidMount() {
        this.getData();
    }

    deleteStudent = (id) => {
        console.log(id);
        axios.post(`http://localhost:1234/delete`, { id: id }).then(res => {
            console.log(res);
            this.getData();
            alert(res.data.status);
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Students Record</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <table className="table table-hover">
                                <caption>List of Students</caption>
                                <thead>
                                    <tr className="table-light">
                                        <th>Name</th>
                                        <th>Branch</th>
                                        <th>Semester</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.persons.map((person) => {
                                        return <tr key={person._id}>
                                            <td>{person.name}</td>
                                            <td>{person.branch}</td>
                                            <td>{person.sem}</td>
                                            <td><button className="btn btn-sm btn-danger" onClick={() => this.deleteStudent(person._id)}><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fetch;