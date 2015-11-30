var Player = React.createClass({
        getInitialState: function () {
            return {
                url: "https://www.youtube.com/embed/1NvsMKYgCsM"
            }
        },
        clickHandler: function(event) {
            var url_pattern= /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(embed)(\S+)/;
            var url_elem = document.getElementById("set-url").value;
            if(!url_elem.match(url_pattern)){
                document.getElementById("url-error").className = "errors";
                return;
            } 
            this.setState({
                url: url_elem
            });
        },
        
        resetWindow: function(){
            this.setState({
                url: "https://www.youtube.com/embed/1NvsMKYgCsM"
            });
            var url_elem = document.getElementById("set-url");
            url_elem.value = "";
            document.getElementById("url-error").className = "hide";
        },

        render: function () {
            return(
                <div id="container">
               {/* player */}
                    <div className="row">
                        <div id="holder" className="col-lg-8 col-lg-offset-2">
                            <iframe id="player" width="100%" height="450" frameBorder="0" src={this.state.url} allowFullScreen />
                        </div>    
                    </div>             
                 {/* player */} 
                 {/* input url  */}
                    <div className="row">
                        <br/>
                        <div id="holder" className="col-lg-8 col-lg-offset-2">
                           <form className="col-lg-9" Validate>
                            <div className="form-group inline">
                                <input id="set-url" type="text" className="form-control" placeholder="https://www.youtube.com/embed/1NvsMKYgCsM"/>
                                <div id="url-error" className="hide">Please inser a valid url!</div>
                            </div>                            
                           </form>
                           <button className="btn btn-primary buttons" onClick={this.clickHandler}>Play&nbsp;&nbsp;<i className="glyphicon glyphicon-play"></i></button>
                           <button className="btn btn-danger buttons" onClick={this.resetWindow}>Reset&nbsp;&nbsp;<i className="glyphicon glyphicon-refresh"></i></button>
                        </div>    
                    </div>  
                </div>
            );
        }
    });

    ReactDOM.render(
            <Player />,
            document.getElementById("player-load")
    );


var Login = React.createClass({

    getInitialState: function() {
            return{
                login: "block",
                logout: "none"
            }
        },
    
    logIn: function() { 
        var user = document.getElementById("user"), password = document.getElementById("password");
        if(user.value === "admin" && password.value === "admin"){
            this.setState({
                login: "none",
                logout: "block"
            });

             document.getElementById("comments").className = "show col-lg-8 col-lg-offset-2";

        } else {
            document.getElementById("error").className = "errors";
        }         
    },

    logOut: function() {
        this.setState({
            login: "block",
            logout: "none"
        });

        document.getElementById("error").className = "hide";
        document.getElementById("comments").className = "hide";;

        var user = document.getElementById("user"), password = document.getElementById("password");
        user.value = "";
        password.value = "";
    },
    
	render: function(){       
		return( 
        <div>   
            { /* login button*/ } 
            <div id="logout-btn" className="form-lg-6 form-inline pull-right padded" style={{display: this.state.logout}}>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.logOut}>Logout&nbsp;&nbsp;<i className="glyphicon glyphicon-log-out"></i></button>
                </div>
            </div>

            { /* login button*/ }      
             <div id="login-btn" className="form-lg-6 form-inline pull-right padded" style={{display:this.state.login}}>
                <div className="form-group">
                    <input id="user" type="text"  value="admin" className="form-control" placeholder="User Name" />
                </div>
                &nbsp;
                &nbsp;
                <div className="form-group">
                    <input id="password" value="admin" type="password"  className="form-control" placeholder="Password"/>
                </div>    
                &nbsp;
                &nbsp;
                <button className="btn btn-primary" onClick={this.logIn}>Login&nbsp;&nbsp;<i className="glyphicon glyphicon-log-in"></i></button>    
                <div id="error" className="hide">Please fill in your user name and password</div>
            </div>            
        </div>    
        );        
	}
})

ReactDOM.render(
	<Login/>,
	document.getElementById("login")
);