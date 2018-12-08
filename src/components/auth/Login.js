import React, { Component } from "react";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "../../actions";

const mapStateToProps = state => {
  console.log("state", state);
  const { user } = state.user;
  return user;
};

const mapDispatchToProps = dispatch => {
  console.log("loginUser", loginUser);
  return bindActionCreators({ loginUser }, dispatch);
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "ayrus2289@gmail.com",
      password: "password"
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  submitLogin = async e => {
    e.preventDefault();
    console.log("props", this.props);

    const userInput = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("hi", this.props.loginUser);
    await this.props.loginUser(userInput);
    return;
  };

  render() {
    console.log(loginUser);
    return (
      <Grid centered columns={3}>
        <Grid.Column stretched>
          <Grid.Row>
            <Form onSubmit={event => this.submitLogin(event)}>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
