import React from "react";
import "./App.css"
import CreateCards from "./components/CreateCards";


class App extends React.Component {

    render() {
        return (
            <div className={'wrapper'}>
                <h1 className={"title"}>
                    SBA Terms
                </h1>
                <div className="content-wrapper">
                    <CreateCards/>
                </div>
            </div>
        );
    }
}

export default App;
