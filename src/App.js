import { Component, useEffect, useState } from "react";
import "./styles.css";

class EleveComponent extends Component {
  constructor(props) {
    super(props);
    this.setState({
      eleves: props.eleves
    });
  }

  render() {
    const eleves = this.props?.eleves != null ? this.props.eleves : [];
    return (
      <div>
        {eleves.map((e, ke) => {
          return <EleveHooks eleve={e} />;
        })}
      </div>
    );
  }
}

const EleveHooks = (props) => {
  const [color, setColor] = useState("red");

  const handleChangeColor = (e) => {
    color == "green" ? setColor("red") : setColor("green");
  };

  useEffect(() => {}, []);
  return (
    <li
      className={color}
      onClick={(e) => {
        handleChangeColor(e);
      }}
    >
      {props.eleve}
    </li>
  );
};

export default function App() {
  const eleves = ["toure", "elie", "Dev"];
  return (
    <div>
      <EleveComponent eleves={eleves} />
    </div>
  );
}
