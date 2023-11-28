import React from "react";
import Card from "./Card";


const CardList = function({ robots, inputValue, setInputValue }) {
    return (
        <div>
            {
                robots.filter((robot, i) => robot.name.toLowerCase().includes(inputValue.toLowerCase()))
                      .map((robot) => {
                    return (
                    <Card 
                        key={robot.id} 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email}
                    />
                    )
                })
            }
        </div>
    );
};

// 2nd way to do this with a for...of loop()

// const CardList = function({ robots }) {
//     const CL = [];
//     for (let user of robots) 
//         CL.push(<Card key={robots.indexOf(user)} id={user.id} name={user.name} email={user.email}/>)
//     return (
//         <div>
//             {CL}
//         </div>
//     );
// };

export default CardList;