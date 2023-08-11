import React from "react";
import UserContext from "../utils/UserContext";

class UserComponent extends React.Component {
    constructor(props) {
        console.log(props.name + 'constructor')
        super(props);
        this.state = {
            userInfo: null
        }
    }

    async componentDidMount() {
        console.log(this.props.name + "componentDidMount called")
        const data = await fetch('https://api.github.com/users/abhivpd');
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo: jsonData
        })
    }

    componentDidUpdate() {
        console.log(this.props.name + "componentDidUpdate called")
    }

    render() {
        console.log(this.props.name + 'render')
        if (this.state.userInfo !== null) {
            const { name, location } = this.state.userInfo;
            return (
                <div className="user-card">
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Contact: abhishekvpd@gmail.com</h4>
                    <h6>count: {this.state.count}</h6>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>Increment</button>


                    <UserContext.Consumer>
                        {(data) => <h4>User: {data.loggedInUser}</h4>}
                    </UserContext.Consumer>

                </div>
            )
        }
    }
}

export default UserComponent;