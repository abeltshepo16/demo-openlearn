import React from 'react';
import {Link } from 'react-router-dom';



class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email Address is not valid";
            }
        }

        //Password
        var re;
        if(fields["password"] !== "") {
            if(fields["password"].length < 8) {
                alert("Error: Password must contain at least eight characters!");
                return false;
            }
            if(fields["password"] === fields["username"]) {
                alert("Error: Password must be different from Username!");
                return false;
            }
            re = /[0-9]/;
            if(!re.test(fields["password"])) {
                alert("Error: password must contain at least one number (0-9)!");
                return false;
            }
            re = /[a-z]/;
            if(!re.test(fields["password"])) {
                alert("Error: password must contain at least one lowercase letter (a-z)!");
                return false;
            }
            re = /[A-Z]/;
            if(!re.test(fields["password"])) {
                alert("Error: password must contain at least one uppercase letter (A-Z)!");
                return false;
            }
        } else {
            alert("Error: Please check that you've entered and confirmed your password!");
            return false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            alert("Form submitted");
        }else{
            alert("Form has errors.")
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }


    render() {
        return (
            <form className="form-horizontal" onSubmit= {this.contactSubmit.bind(this)}>
                <fieldset id="maake">
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Email Address">Email Address:</label>
                        <div className="col-md-4">
                            <input id="Email Address" name="Email Address" type="text" placeholder="Email Address" className="form-control input-md" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} required />
                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Password">Password:</label>
                        <div className="col-md-4">
                            <input id="Password" name="Password" type="password" placeholder="Password" className="form-control input-md" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required />
                            <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                        </div>
                    </div>

                    <br />
                    <div>

                        <Link to ={'/ForgotPassword'} id="fpsd">Forgot Password</Link>

                        <button>Login</button>

                    </div>
                </fieldset>
                <div>

                </div>
            </form>

        );
    }
};

export default Login;
