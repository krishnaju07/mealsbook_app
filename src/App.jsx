import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import CartPage from "./components/CartPage";
import Header from "./pages/Header";
import OrdersPage from "./components/OrdersPage";
import { ThemeProvider } from "./pages/context";
import MealsPage from "./components/Meals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/CartPage",
    element: <CartPage />,
  },
  {
    path: "/OrdersPage",
    element: <OrdersPage />,
  },
  {
    path: "/MealsPage",
    element: <MealsPage />,
  },
]);

function App() {
  return (
    <>
      <div >
        <ThemeProvider className='data-theme'>
        <Header />
        <RouterProvider router={router} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
