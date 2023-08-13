import "./Input.css";
/* eslint-disable react/prop-types */
// import { UilSearch } from "@iconscout/react-unicons";

const Input = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search City..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <button onClick={props.searchHandler}>Search</button>
    </div>
  );
};

export default Input;
