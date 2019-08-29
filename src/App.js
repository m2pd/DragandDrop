import React from 'react';
import styled from 'styled-components';
import DnsTest from './Dnd/DndTest';




const AppWrapper = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 100px;

`;
const Container = styled.div`

`;

export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state= {
      checked: false
    }
  }
  render(){
    return(
            <AppWrapper >
                <Container>
                  <DnsTest />
                </Container>
            </AppWrapper>
    );
  }
}


