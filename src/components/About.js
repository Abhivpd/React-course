import React from "react";
import UserComponent from "./User";


class About extends React.Component {
    constructor() {
        super();
        console.log('Parent Constructor')
    }

    componentDidMount() {
        console.log('Parent CoponentDidMount')
    }

    render() {
        console.log("parent render");
        return (
            <>
                <h1>About Us</h1>
                <UserComponent name={'First'} />
                <UserComponent name={'Second'} />
                <UserComponent name={'Third'} />
            </>
        )
    }
}
// const About = () => {
//     return (
// <>
//     <h1>About Us</h1>
//     <UserComponent name={'Abhishek'}/>
// </>
//     )
// }

export default About;