import React from "react";
import ReactReduxPage from "./pages/ReduxPage";
// import RouterPage from "./pages/RouterPage";
// import RouteChildren from "./pages/RouteChildren";
// import RouteComponePage from "./pages/RouteComponePage";
import { Provider } from './lib/ReactRedux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <button onClick={() => setNum(num + 1)}>change num {num}</button> */}
        {/* react redux 学习 */}
        <ReactReduxPage number={6} />
      </Provider>

      {/* router 学习 */}
      {/* <RouterPage /> */}

      {/* route children  */}
      {/* <RouteChildren /> */}

      {/* // ! 比较一下render和component,重点掌握  */}
      {/* <RouteComponePage /> */}
    </div>
  );
}

export default App;
