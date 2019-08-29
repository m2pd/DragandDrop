import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.getValue = this.getValue.bind(this)
    }
    getValue = function(){
        let valueInput = document.getElementById('{this.props.id}').value;
        alert(valueInput);
    }
    render(){
        return(
            <div>
 
                <h2>Form</h2>
                <hr />
                 
                <label>First Name: </label>
                <input type="text"  value={this.props.id} />
                 
                <br />
 
               
 
                <input type="button" value="Submit"  />
 
                <hr />
            </div>
        )
    }
};
export default Form;