import React from "react";

const Searchbox = function({ inputValue, setInputValue, placeHolder }) {

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }
    return <input style={{boxSizing: "border-box"}}
                onChange={handleOnChange}
                value={inputValue}
                type="search" 
                placeholder={placeHolder}
            />
};

export default Searchbox;