import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Title = () => (
  <div style={{marginTop: 30, marginBottom: 30}}>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>老师信息管理系统</Header.Content>
    </Header>
  </div>
)

export default Title