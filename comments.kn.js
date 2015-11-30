 // React state property is immutable
            // so in order to apply two-way-data-binding
            // we are going to use knockout.js for the comments
            function Comments(){
                var self = this;
                self.comments = ko.observable("Please do not start your comment with space, otherwise it will be rejected as an error!");
                self.isEmpty = ko.observable(false);
                self.users = ko.observableArray([
                    { name: "Trifon Trifonov", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
                    { name: "Ivan Trifonov", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
                    { name: "Nikol Ivanova", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
                ]);    
                
                self.makeComment = function () {
                    var space = /^\s/;
                    var text = document.getElementById("comment").value;
                        
                    if ( !text.match(space)  &&  text !== "" &&  text !== "Please do not start your comment with space, otherwise it will be rejected as an error!") {
                        self.isEmpty(false);
                        self.isEmpty();
                        self.users.unshift({
                            name: "Site Admin",
                            comment: self.comments()
                        });
                        self.comments("Please do not start your comment with space, otherwise it will be rejected as an error!");
                    } else {
                        self.isEmpty(true);
                    }
                };    
                  
            }
            
            ko.applyBindings(new Comments());