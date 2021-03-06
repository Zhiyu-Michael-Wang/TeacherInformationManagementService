import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    Radio,
    TextArea,
    Card,
    Icon
} from 'semantic-ui-react'
import axios from 'axios'


export default class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.onChangeContact = this.onChangeContact.bind(this)
        this.onChangeDetail = this.onChangeDetail.bind(this)
        this.onChangeDetailType = this.onChangeDetailType.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        this.onSubmitData = this.onSubmitData.bind(this)

        this.state = {
            name: "Name",
            detailType: "txt",
            detail: "Description",
            contact: []
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDetailType(e, {value}) {
        this.setState({
            detailType: value
        })
        console.log(value)
    }

    onChangeDetail(e) {
        this.setState({
            detail: e.target.value
        })
    }

    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        })
    }

    // onSubmit(e) {
    //     e.preventDefault()

    //     const user = {
    //         name: this.state.name,
    //         detailType: this.state.detailType,
    //         detail: this.state.detail,
    //         contact: this.state.contact
    //     }


    //     axios.post('http://localhost:5001/users/add', user)
    //         .then(res => {
    //             console.log('user added')
    //             // console.log(res.data)
    //         })

    //     this.setState({
    //         name: "Name",
    //         detailType: "txt",
    //         detail: "Description",
    //         contact: []
    //     })

    //     // window.location('/')
    // }

    onSubmitData(e){
        e.preventDefault()
        this.props.onSubmitData(this.state)
        this.setState({
            name: "Name",
            detailType: "txt",
            detail: "Description",
            contact: []
        })
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
        Array.from(document.querySelectorAll("textArea")).forEach(
        input => (input.value = "")
        );
        console.log('user creation finish')
        console.log(this.state)

    }

    // handleChange = (e, { value }) => {
    //     this.setState({ value })
    //     console.log(this.state)
    // }

    render() {
        const value = this.state
        return (
            <Card>
                <Card.Content>
                    
                    <Card.Header>
                        <Icon name='user circle' />
                        ??????????????????
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form onSubmit={ this.onSubmitData }>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='??????'
                                placeholder='??????'
                                onChange={this.onChangeName}
                                content={value.name}
                            />
                        </Form.Group>
                        
                        <Form.Field
                            control={TextArea}
                            label={value.detailType !== 'pdf' ? '????????????' : null}
                            placeholder={value.detailType === 'txt' ? '???????????????????????????' : '????????????????????????????????? (????????????"https://")'}
                            onChange={this.onChangeDetail}
                            hidden={value.detailType === 'pdf'}
                        />

                        <Form.Group inline>
                            <Form.Field
                                control={Radio}
                                label='??????'
                                value='txt'
                                checked={value.detailType === 'txt'}
                                onChange={this.onChangeDetailType}
                            />
                            <Form.Field
                                control={Radio}
                                label='PDF??????'
                                value='pdf'
                                checked={value.detailType === 'pdf'}
                                onChange={this.onChangeDetailType}
                            />
                            <Form.Field
                                control={Radio}
                                label='????????????'
                                value='web'
                                checked={value.detailType === 'web'}
                                onChange={this.onChangeDetailType}
                            />
                        </Form.Group>
                        <Form.Field control={Button} floated='right'>??????</Form.Field>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}