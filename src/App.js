import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import AlbumPage from './Components/AlbumPage';

import {checkLoginState, logOut} from './facebook'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {login:false};
    this.checkLoginState = checkLoginState.bind(this);
    this.logOut = logOut.bind(this);
    }
  loginState = () => {
    const loginstate = !this.state.login;
    if(loginstate){
      this.checkLoginState();
    }
    else {
      this.logOut();
    }
    this.setState({login:loginstate})
  }

  render() {
    // <Route path="/albums" component={ScreensUserLogin} />
    // <Redirect to={{ pathname: '/albums', state: { data: this.state.data } }} />
    const  data = (this.state.data) ? this.state.data:null;
    const  emailId = (this.state.emailId) ? this.state.emailId:null;
    const  firstName = (this.state.firstName) ? this.state.firstName:null;
    const  lastName = (this.state.lastName) ? this.state.lastName:null;
    const  profilePicture = (this.state.profilePic) ? this.state.profilePic:null;
    const loginstate = this.state.login;
    console.log('test',data);
    return (
      <div className="App">
        <div>
          { loginstate && <Button variant="primary" onClick = {this.loginState} >Logout</Button>}
          { !loginstate && <Button variant="primary" onClick = {this.loginState} >Login</Button>}
        </div>
        <div id="status"></div>
        { loginstate && data &&
            data.map((photo,idx) => {
              console.log('photo',photo);
              return <AlbumPage key={idx} albumURL={photo.cover_photo.picture} albumName={photo.name} />
            })
        }
        <div><strong>{loginstate && emailId}</strong></div>
        <div><strong>{loginstate && firstName}</strong></div>
        <div><strong>{loginstate && lastName}</strong></div>
        <div><img src={loginstate && profilePicture}/></div>
      </div>
    );
  }
}

export default App;
