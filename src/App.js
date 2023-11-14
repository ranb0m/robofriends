import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Searchbox from "./Searchbox"

const App = function() {
    return (
        <>
        <div className="tc">
            <h1>Robofriends</h1>
            <Searchbox />
        </div>
        <CardList robots={robots}/>
        </>
    );
}

export default App;