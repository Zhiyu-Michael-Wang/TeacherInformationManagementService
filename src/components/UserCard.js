import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class UserCard extends React.Component {

    

    render() {

        const cardStyle = {
            
            margin: "10px"
          };


        const props = this.props
        const userData = props.userData
        console.log(userData)

        return (
            <div className="UserCard">
                <Card style={ cardStyle }>
                    <Card.Content>
                        <Card.Header>
                            <Icon name='user circle' />
                            {userData.name}
                        </Card.Header>
                        
                        {(() => {
                            switch (userData.detailType) {
                                case "pdf": return (
                                    // <Link to={'/detail/' + userData.detail}> 
                                    //   <p>访问我的个人简历以了解详情</p>
                                    // </Link>
                                    <a href={'https://pdf-teacher-information.s3.us-east-2.amazonaws.com/pdfs/' + userData.detail + '.pdf'}>
                                        访问我的个人简历以了解详情
                                    </a>
                                );
                                case "web":  return (
                                    <a href={userData.detail}>访问我的个人网站以了解详情</a>
                                );
                                default: return (
                                    <Card.Meta>
                                        <span className='mail'>{userData.detail}</span>
                                    </Card.Meta>
                                );
                            }
                        })()}
                    </Card.Content>
                    {
                        userData.contact.map(data => (
                            <Card.Content extra>
                                <Icon name='external alternate' />
                                    {data}
                            </Card.Content>
                        ))
                    }
                    
                </Card>
            </div>
        )
    }
}


export default UserCard