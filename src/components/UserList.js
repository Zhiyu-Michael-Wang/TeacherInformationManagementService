import React from 'react'
import UserCard from './UserCard'
import { Card } from 'semantic-ui-react'
import CreateUser from './CreateUser'
import axios from 'axios'



class UserList extends React.Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
        this.onSubmitData = this.onSubmitData.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.backendLoc = 'teacher-info-db.herokuapp.com'
        this.wrapper = React.createRef();
    }

    // getDataLocal() {
    //     const self = this  
    //     self.setState({
    //         users: users
    //     })
    // }

    getData(){
        const self = this
        axios.get('http://' + this.backendLoc + '/users/')
            .then(response => {
                if (response.data.length > 0){
                    self.setState({
                        users: response.data
                    })
                    
                }
            })
    }

    componentDidMount() {
        this.getData()
    }

    onSubmitData(user){
        axios.post('http://' + this.backendLoc + '/users/add', user)
            .then(res => {
                this.getData()
            })
        
    }

    deleteUser(id){
        const self = this
        console.log(`deleting ${id} ...`)
        axios.delete('http://' + this.backendLoc + '/users/' + id)
            .then(res => console.log(res.data))
        self.setState({
            users: self.state.users.filter(el => el._id !== id)
        })
    }

    

    render() {

        const users = this.state.users.map(user =>
            user = (
                <UserCard key={ user.id } userData={{
                    id: user._id,
                    name: user.name,
                    detailType: user.detailType,
                    detail: user.detail,
                    contact: user.contact
                }} deleteUser={this.deleteUser}/>
            )
        ) 

        return (
            <div 
                className="UserList" 
                style={{ maxWidth: "1000px", margin: "auto" }}
                ref={this.wrapper}
            >
                {/* <Grid columns={2} centered padded> */}
                <Card.Group centered>
                    {users}
                    <CreateUser onSubmitData={this.onSubmitData}/>
                </Card.Group>
                {/* </Grid> */}
            </div>
        )
    }
}


export default UserList