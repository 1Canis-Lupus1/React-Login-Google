import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      name: "",
      email: "",
      profilePicture: "",
      isLoggedIn: false,
    };
  }

  responseGoogle = (response) => {
    console.log("Google response:", response);
    this.setState(
      {
        userID: response.googleId,
        name: response.profileObj.name,
        email: response.profileObj.email,
        profilePicture: response.profileObj.imageUrl,
        isLoggedIn: true,
      },
      () => {
        console.log("After Set State Google:", this.state);
      }
    );
  };

  render() {
    let GoogleContent;

    if (this.state.isLoggedIn) {
      GoogleContent = (
        <div style={{
                    width:"700px",
                    margin:"auto",
                    background:"lightgrey",
                    padding:"10px",
                    fontSize:"20px"
                }}>
                    <h2 style={{background:"lightcyan"}}>User Details</h2>
                    <table style={{border:"5px solid black"}}>
                        <thead>
                            <th style={{border:"3px solid black",padding:"5px"}}>Profile Picture</th>
                            <th style={{border:"3px solid black",padding:"5px"}}>Name</th>
                            <th style={{border:"3px solid black",padding:"5px"}}>Email</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{border:"3px solid black",padding:"5px"}}><img src={this.state.profilePicture} alt={this.state.name} height="90px"/></td>
                                <td style={{border:"3px solid black",padding:"5px"}}>{this.state.name}</td>
                                <td style={{border:"3px solid black",padding:"5px"}}>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
      );
    } else {
      GoogleContent = (
        <>
        <h3>Google</h3>
          <GoogleLogin
            clientId="960447938397-sli7p039rhfp7al24954qkrvmumqcf7m.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </>
      );
    }
    return (
      <div>
        <h1>{GoogleContent}</h1>
      </div>
    );
  }
}
export default Google;