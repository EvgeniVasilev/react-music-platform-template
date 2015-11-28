var Player = React.createClass({
        getInitialState: function () {
            return {
                url: "https://www.youtube.com/embed/1NvsMKYgCsM"
            }
        },
        clickHandler: function(event) {
            var url_pattern= /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(embed)(\S+)/;
            var url_elem = document.getElementById("set-url").value;
            if(url_elem.match(url_pattern)){
                alert("The inserted value is correct youtube embed url!");;
            } else {
                alert("Please inser a valid youtube embed vide url!");
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
    
    stopSubmit: function() {
        alert("Will come later");        
    },
    
	render: function(){
		return(
            <div className="container-fluid">
            <br/>
                <div className="col-lg-8 pull-right inline">
                    <div className="form-group col-lg-4">
                        <input type="text" className="form-control" placeholder="User Name"/>
                    </div>
                    
                    <div className="form-group col-lg-4">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>                     
                     <button className="btn btn-primary" value="Login"  onClick={this.stopSubmit}>Login&nbsp;&nbsp;<i className="glyphicon glyphicon-log-in"></i></button>
                </div>               
            </div>
        );
	}
})

ReactDOM.render(
	<Login />,
	document.getElementById("login")
);