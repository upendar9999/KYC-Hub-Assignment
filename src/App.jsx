import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ProductDetails from "./components/ProductDetails";
import CompareProducts from "./components/CompareProducts";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <div className="flex flex-col h-screen">
            <NavBar />
            <div className="flex flex-1">
              <SideBar />
              <div className="flex-1 p-4 overflow-auto">
                <Routes>
                  <Route path="/" element={<ProductDetails />} />
                  <Route
                    path="/compareproducts"
                    element={<CompareProducts />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
