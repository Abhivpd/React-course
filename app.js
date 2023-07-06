import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement('h1', { id: 'shruti' }, 'Heading 1');
const heading2 = React.createElement('h2', {}, 'Heading 2');
const container = React.createElement(
    'div',
    { id: 'container' },
    [heading1, heading2]
);

// const jsxHeading = <h1 id="heading">This is a heading</h1>
const jsxHeading = (
    <h1 id="heading">
        This is a heading
    </h1>
)

// const HeadingComponent = () => {
// return <h1 id="heading">This is a heading</h1>
// }


const TitleComponent = () => (
    <p>This is a title</p>
)

const HeadingComponent = () => (
    <div className="heading">
        <TitleComponent />    {/* component composition */}
        <p id="heading">This is a component heading</p>
    </div>
)

console.log(jsxHeading);
console.log(HeadingComponent());



const pageTitle = (
    <h1 className="title">This is a Page Title</h1>
);

const headerTitle = (
    // <React.Fragment>
    //     {pageTitle}
    //     <p>This is a Header Title</p>
    // </React.Fragment>
    <>
        {pageTitle}
        <p>This is a Header Title</p>
    </>
);

const HeaderComponent = () => (
    <div>
        {headerTitle}
        <p>This is a header component</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);