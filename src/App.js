import React from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox"
import Scroll from "./Scroll";
import { useState } from "react";
import Menu from "./Menu";
import 'tachyons'


const App = function() {
    const [inputValue, setInputValue] = useState('')
    const [robots, setRobots] = useState([])

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots([...users]))

    return (
        <>
        <div className="tc">
            <h1>Robofriends</h1>
            <Searchbox inputValue={inputValue} setInputValue={setInputValue} placeHolder={"Enter your robot:"}/>
        </div>
            <Menu />
            <Scroll>
                <CardList robots={robots} inputValue={inputValue} setInputValue={setInputValue}/>
            </Scroll>
        </>
    );
}

export default App;