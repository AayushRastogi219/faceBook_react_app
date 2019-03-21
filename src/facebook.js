export function checkLoginState(){
	window.FB.login(response => {
		if(response.status === 'connected'){
			const context = this;
			window.token = response.authResponse.accessToken;
			window.FB.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}&access_token=' + window.token, 'get', response => {

            if(response && response.albums.data){
                context.setState({data: response.albums.data});
            }
			})
			//Get User Email Id
			window.FB.api('/' + response.authResponse.userID,'GET',{"fields":"birthday,email,hometown"}, response => {
				if(response && response.email){
						context.setState({emailId:'User Email id: '+response.email});
				}
			});

			//Get User Name and Profile picture
      window.FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture.width(520).height(420)'},response =>{
				if(response && response.first_name && response.last_name && response.picture.data.url){
						context.setState({firstName:'User First Name: '+response.first_name});
						context.setState({lastName:'User Last Name: '+response.last_name});
						context.setState({profilePic:response.picture.data.url});
					}
        }
      );

		}

	});
}

export function logOut(){
	window.FB.logout(response => {

		if(response.status === 'unknown'){
			// this.setState({ user : null, userName: null, buttonAction : 'btn-primary'});
		}
  	});
}
