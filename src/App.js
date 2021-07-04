import StateLessComponent from "./demo-components/StateLessComponent";
import StateFullComponent from "./demo-components/StateFullComponent";
import ExampleDivComponent from "./example-div-component/index";
import DemoDataBinding from "./data-binding/DemoDataBinding";
import DemoHandleEvents from "./handle-events/DemoHandleEvents";
import DemoLogin from "./demo-login/DemoLogin";
import AppShowRoomCar from "./show-room-car/AppShowRoomCar";
import Parent from "./demo-props/Parent";
import DemoListAndKeys from "./demo-list-and-key/DemoListAndKeys";
import "./App.css";
import AppGlasses from "./glasses-store/AppGlasses";

function App() {
  return (
    <div>
      {/* gọi component */}
      {/* <StateLessComponent />
      <StateFullComponent /> */}
      {/* <ExampleDivComponent /> */}
      {/* <DemoDataBinding></DemoDataBinding> */}
      {/* <DemoHandleEvents></DemoHandleEvents> */}
      {/* <DemoLogin /> */}
      {/* <AppShowRoomCar /> */}
      {/* <Parent /> */}
      {/* <DemoListAndKeys> </DemoListAndKeys> */}
      <AppGlasses />
    </div>
  );
}

export default App;
