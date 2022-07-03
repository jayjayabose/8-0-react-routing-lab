import React from "react";

class NewStaff extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            prefix: "",
            postfix: "",
            title: ""
        };
    }
    
    handleValues = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleAddStaff = (event) => {
        event.preventDefault();
        const {firstName, lastName, prefix, postfix, title} = this.state;
       
        if (!firstName || !lastName || !title) alert("First Name, Last Name and Title are required."); 
        else {
            alert ("submit");
            let employee = {
                id: "",
                firstName: firstName,
                lastName: lastName,
                prefix: prefix,
                postfix: postfix,
                title: title,    
            }
            this.props.addEmployee(employee);
        }
            
    }

    render () {
        const {firstName, lastName, prefix, postfix, title} = this.state;
        return (
            <>
            <h3>Add New Staff Member</h3>
            
            <form onSubmit={this.handleAddStaff}>
                <label for="firstName">First Name: </label>
                <input type="text" name="firstName" value={firstName} onChange={this.handleValues}/>
                <br/>
                <label for="lastNamefirstName">Last Name: </label>
                <input type="text" name="lastName" value={lastName} onChange={this.handleValues}/>
                <br/>
                <label for="prefix">Prefix: </label>
                <input type="text" name="prefix" value={prefix} onChange={this.handleValues}/>
                <br/>
                <label for="postfix">Postfix: </label>
                <input type="text" name="postfix" value={postfix} onChange={this.handleValues}/>
                <br/>
                <label for="title">Title: </label>
                <input type="text" name="title" value={title} onChange={this.handleValues}/>
                <br/>
                <button type="submit">Add Staff Member</button>
            </form> 
            </>
        )
    }    
}

export default NewStaff;

