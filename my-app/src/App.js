import React from "react";
import "./App.css";

const items = [
  { id: "uniq1", name: "Paul" },
  { id: "uniq2", name: "Mary" },
  { id: "uniq3", name: "Viktor" },
  { id: "uniq4", name: "Suzanna" },
  { id: "uniq5", name: "Peter" },
  { id: "uniq6", name: "Vladislav" },
  { id: "uniq7", name: "Anna" },
];

const User = (props) => {
  let userName = props.name;
  let newName = userName.indexOf("e");
  let name = props.name;
  if (props.name.length > 5) {
    name = props.name.slice(0, 5) + "...";
  }
  let itemsName = name.toLowerCase();
  let newItemsName = itemsName.split("").reverse().join("");
  let itemsNameRed = "";
  if (itemsName === newItemsName) {
    itemsNameRed = "name-highlighted";
  }
  if (newName === -1) {
    console.log(props.name.length);

    return (
      <div>
        <span className={itemsNameRed}> it`s user {name} </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className={itemsNameRed}>
          It`s Premium User! Welcome, {name}!
        </span>
      </div>
    );
  }
};

// export const UserList = () => {
//   return (
//     <div>
//       {items.map((item) => (
//         <span key={item.id}>
//           <User name={item.name} />
//         </span>
//       ))}
//     </div>
//   );
// };

export const UserList = () => {
  return (
    <ComposableUser>
      {items.map((item) => (
        <span key={item.id}>
          <User name={item.name} />
        </span>
      ))}
    </ComposableUser>
  );
};

const ComposableUser = (props) => {
  return <div>{props.children}</div>;
};
export default UserList;
