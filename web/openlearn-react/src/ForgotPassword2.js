import React from 'react';


class ForgotPassword2 extends React.Component{
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
                errors["email"] = "Email is not valid";
            }
        }
        var re;
        //Password
        if(fields["password"] !== "" && fields["password"] === fields["confirmPassword"]) {
            if(fields["password"].length < 6) {
                alert("Error: Password must contain at least six characters!");
                // form.pwd1.focus();
                return false;
            }
            if(fields["password"] === fields["username"]) {
                alert("Error: Password must be different from Username!");
                //form.pwd1.focus();
                return false;
            }
            re = /[0-9]/;
            if(!re.test(fields["password"])) {
                alert("Error: password must contain at least one number (0-9)!");
                // form.pwd1.focus();
                return false;
            }
            re = /[a-z]/;
            if(!re.test(fields["password"])) {
                alert("Error: password must contain at least one lowercase letter (a-z)!");
                //form.pwd1.focus();
                return false;
            }
            re = /[A-Z]/;
            if(!re.test(fields["password"])) {
                alert("Error: password must contain at least one uppercase letter (A-Z)!");
                // form.pwd1.focus();
                return false;
            }
        } else {
            alert("Error: Please check that you've entered and confirmed your password!");
            // form.pwd1.focus();
            return false;
        }



        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            //alert("Password reset link sent successfully");
        }else{
            // alert("Enter valid email.")
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }


    render() {
        return (

            <form className="form-horizontal" onSubmit={this.contactSubmit.bind(this)}>
                <fieldset id="maake">
                    {/* Form Name */}
                    <p id="test2">To reset your password, enter your registered email address</p>
                    {/* Text input*/}
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Email Address">Email Address:</label>
                        <div className="col-md-4">
                            <input id="email" name="Email Address" type="text" placeholder="Email Address" className="form-control input-md" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} required />
                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Password">Password:</label>
                        <div className="col-md-4">
                            <input id="password" name="Password" type="text" placeholder="Password" className="form-control input-md" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required />
                            <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Confirm Password">Confirm Password:</label>
                        <div className="col-md-4">
                            <input id="confirmPassword" name="Confirm Password" type="text" placeholder="Confirm Password" className="form-control input-md" onChange={this.handleChange.bind(this, "confirmPassword")} value={this.state.fields["confirmPassword"]} required />
                            <span style={{color: "red"}}>{this.state.errors["confirmPassword"]}</span>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button>Send Email</button>
                    </div>
                    <br />
                    <p>Don't have an account <a href="sign_up.html">Sign Up Now</a> </p>
                </fieldset>
            </form>
        );
    }
};

export default ForgotPassword2;
