import React from 'react';

import ReactDOM from 'react-dom/client';

// const heading1 = React.createElement("h1", { id: "title1" }, "Namaste everyone heading 1 from parcel");
// const heading2 = React.createElement("h1", { id: "title2" }, "Namaste everyone heading 2");
// const container = React.createElement("div", { id: "container" }, [heading1, heading2]);

const HeadingComponent = () => {
    return (
        <h2>
            Header comp is this
        </h2>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
        <HeadingComponent />
    
);
