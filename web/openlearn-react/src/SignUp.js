import React from 'react';



class SignUp extends React.Component{

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

        //Name
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }
        //Contact Numbers
        if(!fields["contactNumber"]){
            formIsValid = false;
            errors["contactNumber"] = "Cannot be empty";
        }

        if(typeof fields["contactNumber"] !== "undefined"){
            if(!fields["contactNumber"].match(/^[0-9]{10,10}$/)){
                formIsValid = false;
                errors["contactNumber"] = "Enter valid contact number";
            }
        }

        //ID Number
        if(!fields["IDNumber"]){
            formIsValid = false;
            errors["IDNumber"] = "Cannot be empty";
        }

        if(typeof fields["IDNumber"] !== "undefined"){
            if(!fields["IDNumber"].match(/^[0-9]{13,13}$/)){
                formIsValid = false;
                errors["IDNumber"] = "Enter valid ID number";
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

        // alert("You entered a valid password: " + fields["password"]);
        //     return true;
        // }





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



        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){

        if(this.handleValidation()){
            alert("Form submitted");
            window.location.assign( window.location.Courses);
        }else{
            e.preventDefault();
           // alert("Form has errors.")
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    };




    render(){
        return (

            <div id="main">
                <div className="background-wrap">
                    <video id="video_bg_element" preload="auto" autoPlay="true" loop="loop" muted="muted">
                        <source src="images/video/video_bg_element.mov" />
                        Video not supported.
                    </video>
                </div>
                <form className="form-horizontal"  onSubmit= {this.contactSubmit.bind(this)} action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeyTJBJa2KkCm92yWDAlDZdNIMWo-3BvFPQ651B-1mVTrh7kg/formResponse" target="no-target">

                    <fieldset className="maake">
                        {/* Form Name */}
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Name">Name:</label>
                            <div className="col-md-4">
                                <input id="name" name="entry.1861696553" type="text" placeholder="Name" className="form-control input-md" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} required />
                                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Surname">Surname:</label>
                            <div className="col-md-4">
                                <input id="surname" name="entry.1145335831" type="text" placeholder="Surname" className="form-control input-md" onChange={this.handleChange.bind(this, "surname")} value={this.state.fields["surname"]} required />
                                <span style={{color: "red"}}>{this.state.errors["surname"]}</span>
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="ID Number">ID Number:</label>
                            <div className="col-md-4">
                                <input id="IDNumber" name="entry.1891884633" type="text" placeholder="ID Number" className="form-control input-md" onChange={this.handleChange.bind(this, "IDNumber")} value={this.state.fields["IDNumber"]}  required />
                                <span style={{color: "red"}}>{this.state.errors["IDNumber"]}</span>
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Email Address">Email Address:</label>
                            <div className="col-md-4">
                                <input id="email"  name="entry.1323120938" type="text" placeholder="Email Address" className="form-control input-md" required  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Contact Number">Contact Number:</label>
                            <div className="col-md-4">
                                <input id="contactNumber" name="entry.605328308" type="text" placeholder="Contact Number" className="form-control input-md" onChange={this.handleChange.bind(this, "contactNumber")} value={this.state.fields["contactNumber"]}  required />
                                <span style={{color: "red"}}>{this.state.errors["contactNumber"]}</span>
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Address">Address:</label>
                            <div className="col-md-4">
                                <input id="Address" name="entry.285574569" type="text" placeholder="Name" className="form-control input-md" required />
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Courses">Select Course:</label>
                            <div className="col-md-4">
                                {/*<input  name="" type="text" placeholder="Name"  />*/}
                                <select id="Courses" name="entry.924779826"  className="form-control input-md" required>
                                    <option selected disabled>Choose course</option>
                                    <option value="JAVA">Java</option>
                                    <option value="C#">C#</option>
                                    <option value="BPM">BPM</option>
                                    <option value="AngularJS">AngularJS</option>
                                    <option value="ReactJS">ReactJS</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="Javascript">Javascript</option>
                                    <option value="ASP.Net">ASP.net</option>
                                    <option value="Azure">Azure</option>
                                    <option value="API">API</option>
                                    <option value="SpringFrameWork">Spring Framework</option>
                                    <option value="SQL">SQL</option>
                                </select>
                            </div>
                        </div>
                        {/* Password input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Password">Password:</label>
                            <div className="col-md-4">
                                <input id="password" name="entry.660860440" type="password" placeholder="Password" className="form-control input-md" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}  required />
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Confirm Password">Confirm Password:</label>
                            <div className="col-md-4">
                                <input id="confirmPassword" name="entry.1337993770" type="password" placeholder="Confirm Password" className="form-control input-md" onChange={this.handleChange.bind(this, "confirmPassword")} value={this.state.fields["confirmPassword"]} required />
                            </div>
                        </div>
                        {/* Button Drop Down */}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Company">Company </label>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <input id="Company" name="entry.1978567664" className="form-control" placeholder="Company" type="text" required />
                                    <div className="input-group-btn">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        {/*
                         <div class="g-recaptcha" data-sitekey="6LcDh0YUAAAAAHt_3w_9zCrwgJa7qKTNo0py8RgG"></div>
                         */}

                        <div>
                            <button type="submit">Sign Up</button>
                        </div>
                    </fieldset>
                    <span src="#" id="no-target" name="no-target" style={{visibility: 'hidden'}} />
                    {/*<iframe src="#" id="no-target" name="no-target" style="visibility:hidden"></iframe>*/}
                </form>

            </div>
        );

    }
}

export default SignUp;