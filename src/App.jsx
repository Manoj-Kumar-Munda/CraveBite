import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import Index from "./pages/Index";
import Error from "./pages/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Index />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path : "/cart",
        element : <CartPage />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
