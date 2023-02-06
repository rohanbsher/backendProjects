"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
];
const UserSearch = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [user, setUser] = (0, react_1.useState)();
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };
    return (<div>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
		" "
        {user && user.age}
      </div>
    </div>);
};
exports.default = UserSearch;
