import React from 'react'
import { Card } from 'semantic-ui-react'
import CreateUser from './CreateUser'
import UserList from './UserList'
import axios from 'axios'



class AllUserInfo extends React.Component {

    constructor() {
        super()
        this.state = {
            users: [],
            userOnCreation: {}
        }
        this.onSubmitData = this.onSubmitData.bind(this)
    }

    getData(){
        const self = this
        axios.get('http://localhost:5001/users/')
            .then(response => {
                if (response.data.length > 0){
                    self.setState({
                        users: response.data
                    })
                    
                    console.log('user list refreshed')
                }
            })
    }

    componentDidMount() {
        this.getData()
    }

    onSubmitData(user){
        axios.post('http://localhost:5001/users/add', user)
            .then(res => {
                this.getData()
            })
        
    }

    

    render() {


        return (
            <div className="AllUserInfo" style={{ maxWidth: "1000px", margin: "auto" }}>
                
                <Card.Group centered>
                    <UserList users={this.state.users}/>
                    <CreateUser onSubmitData={this.onSubmitData}/>
                </Card.Group>
            </div>
        )
    }
}


export default AllUserInfo