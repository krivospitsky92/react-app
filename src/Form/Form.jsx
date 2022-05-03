import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
      displayname: "",
      email: "",
      password: "",
      passconf: "",
    };
  }

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  lastnameChange = (event) => {
    this.setState({ lastname: event.target.value });
  };
  displayname = (event) => {
    this.setState({ displayname: event.target.value });
  };
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  passconfChange = (event) => {
    this.setState({ passconf: event.target.value });
  };

  clearForm = () => {
    this.setState((this.state = null));
  };

  render() {
    return (
      <div className="wrapper">
        <form>
          <input
            id="input1"
            type="text"
            value={this.state.name}
            onChange={this.nameChange}
            placeholder="First name"
          />
          <input
            id="input2"
            type="text"
            value={this.state.lastname}
            onChange={this.lastnameChange}
            placeholder="Last name"
          />
          <input
            id="input3"
            type="text"
            value={this.state.displayname}
            onChange={this.displayname}
            placeholder="Display Name"
          />
          <input
            id="input4"
            type="text"
            value={this.state.email}
            onChange={this.emailChange}
            placeholder="Email Address"
          />
          <input
            id="input5"
            type="password"
            value={this.state.password}
            onChange={this.passwordChange}
            placeholder="Password"
          />
          <input
            id="input6"
            type="password"
            value={this.state.passconf}
            onChange={this.passconfChange}
            placeholder="Pasword Confirmation"
          />
          <label>
            <input
              id="radio1"
              type="radio"
              name="radio"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Join As a Buyer
          </label>
          <label>
            <input
              id="radio2"
              type="radio"
              name="radio"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Join As a Creative or Marketplace Seller
          </label>

          <span>
            <input
              id="checkbox"
              type="checkbox"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </span>
          <input
            onSubmit={console.log(this.state)}
            onClick={this.clearForm}
            id="btn"
            type="submit"
            value="Create account"
          />
        </form>
      </div>
    );
  }
}

export default Form;
