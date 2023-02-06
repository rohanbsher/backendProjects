"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const GuestList = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [guests, setGuests] = (0, react_1.useState)([]);
    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    };
    return (<div>
      <h3>Guest List</h3>
      <ol>
        {guests.map((guest) => (<li key={guest}>{guest}</li>))}
      </ol>

      {/* controlled input where we are going to
  deignate on change callback and value prop as well */}
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Add Guest</button>
    </div>);
};
exports.default = GuestList;
