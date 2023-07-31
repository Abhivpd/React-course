import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('use effect called');
        }, 1000)

        return () => clearInterval(timer);
    }, [])
    return (
        <>
            <h1>Contact Us</h1>
            <h3>This is the Contact us Page</h3>
        </>
    )
}

export default Contact;