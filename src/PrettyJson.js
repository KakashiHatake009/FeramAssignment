import React, { Component } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import './css/mystyle.css';

export class PrettyJson extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unprettyData: '',
            indent: '',
            prettyData: ''
        }
    }

    handleUnprettyData = (event) => {
        this.setState({
            unprettyData: event.target.value
        })

    }
    handleIndent = (event) => {
        this.setState({
            indent: event.target.value
        })

    }
    handlePrettyData = (event) => {
        this.setState({
            prettyData: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let unformatedData = JSON.parse(this.state.unprettyData);
        let space = parseInt(this.state.indent)
        let formatedData = JSON.stringify(unformatedData, null, space);
        this.setState({
            prettyData: formatedData,
        })
    }
    render() {
        return (

            <div class="mydiv">
                <Form onSubmit={this.handleSubmit}>
                    <div class="heading">
                        <h2>Json Formatter</h2>
                    </div>
                    <div class="formElement">
                        <Form.Label>Unpretty Json:</Form.Label>
                        <Form.Control as="textarea" rows={5} value={this.state.unprettyData}
                            onChange={this.handleUnprettyData}
                            placeholder="Paste your JSON  date here" />

                    </div>
                    <div class="formElement">
                        <Form.Label>Indentation:</Form.Label>
                        <Form.Control as="select" value={this.state.indent}
                            onChange={this.handleIndent}>
                            <option value="0">No spaces</option>
                            <option value="1">One space</option>
                            <option value="2">Two spaces</option>
                            <option value="3">Three spaces</option>
                            <option value="4">Four spaces</option>
                            <option value="5">Five spaces</option>
                            <option value="6">Six spaces</option>
                            <option value="7">Seven spaces</option>
                            <option value="8">Eight spaces</option>
                            <option value="8">Nine spaces</option>
                        </Form.Control>
                    </div>
                    <div class="Button1">
                        <Button type="submit">Submit</Button>
                    </div>

                    <div class="formElement">
                        <Form.Label>Pretty Json:</Form.Label>
                        <Form.Control readOnly as="textarea" rows={5} value={this.state.prettyData}
                            onChange={this.handlePrettyData}
                            placeholder="Reformatted JSON will appear here" />

                    </div>
                </Form>
            </div >
        )
    }
}

export default PrettyJson
