import React, { Component } from "react";
import styled from "styled-components";
import Draggable from "../Draggable";
import Droppable from "../Droppable";
import Form from '../Form';


const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius: 3px;
`;

const droppableStyle = {
  backgroundColor: "#555",
  width: "300px",
  height: "400px",
  margin: "32px"
};

export default class DndTest extends Component {
    constructor(props){
        super(props)

        this.state ={
            value : ['ANC', 'Aad']
        }
    }
     
  render() {
    

    return ( 
      <div>
        <Wrapper>
          <Droppable id="dr1" style={droppableStyle}> 
            <Draggable id="item1" style={{ margin: "8px" }}> 
                <Item> Cse </Item>
            </Draggable>  
          </Droppable>

          <Droppable id="dr2" style={droppableStyle}> 
            <Draggable id="item1" style={{ margin: "8px" }}> 
                <Item> Case 2</Item>
            </Draggable>  
          </Droppable>
          
          <Form />

             



        </Wrapper>
      </div>
    );
  }
}
