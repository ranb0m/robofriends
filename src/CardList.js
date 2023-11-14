import React from "react";
import Card from "./Card";

const CardList = function({ robots }) {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
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