import React, { Component } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
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
            <Container class="formElem">
                <Row>
                    <h4>Feram GmbH Assignment !!</h4>
                </Row>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label>Unpretty Json:</Form.Label>
                        <Form.Control as="textarea" rows={5} value={this.state.unprettyData} onChange={this.handleUnprettyData} />
                        <br></br>
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
                        <br></br>
                        <Button type="submit">Submit</Button>
                        <br></br>
                    </Form>
                </Row>
                <br></br>
                <Row>
                    <Form.Label>Pretty Json:</Form.Label>
                    <Form.Control as="textarea" rows={5} value={this.state.prettyData}
                        onChange={this.handlePrettyData}
                        placeholder="Reformatted JSON will appear here" />
                </Row>
            </Container >

        )
    }
}

export default PrettyJson
