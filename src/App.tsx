import { useState } from "react";
import Alert from "./components/alert";
import Buttons from "./components/buttons";
import ListGroup from "./components/ListGroups";


const App = () => {
  let [alertVisible, alertVisibility] = useState(false);
  return <div>
    {alertVisible && <Alert onClose={() => alertVisibility(false)}>
      Hello <span>World</span>
    </Alert>}
    <Buttons children="Hello World"  onClick={() => alertVisibility(true)}></Buttons>
    <ListGroup items={["New York", "California", "Texas", "Florida"]} heading="Cities" selectedItem={(item) => console.log(item)}/>
  </div>
}

export default App;
