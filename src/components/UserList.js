import React from 'react'
import UserCard from './UserCard'
import { Card, Grid } from 'semantic-ui-react'
import users from '../data/Users.json'



class UserList extends React.Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    getData() {
        const self = this  
        self.setState({
            users: users
        })
    }

    componentDidMount() {
        this.getData()
    }

    

    render() {

        const users = this.state.users.map(user =>
            user = (
                <Grid.Column key={ user.id }>
                    <UserCard userData={{
                        name: user.name,
                        detailType: user.detailType,
                        detail: user.detail,
                        contact: user.contact
                    }} />
                </Grid.Column>
            )
        ) 

        return (
            <div className="UserList" style={{ maxWidth: "1000px", margin: "auto" }}>
                {/* <Grid columns={2} centered padded> */}
                <Card.Group centered>
                    {users}
                </Card.Group>
                {/* </Grid> */}
            </div>
        )
    }
}


export default UserList