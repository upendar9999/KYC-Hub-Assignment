import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-red-300 text-white p-4">
      <nav className=" space-y-2">
        <Link
          to="/"
          className={`block p-3 hover:bg-gray-700 ${
            location.pathname === "/" ? "bg-blue-600" : ""
          } rounded`}
        >
          Product Details
        </Link>
        <Link
          to="/compareproducts"
          className={`block p-3 hover:bg-gray-700 ${
            location.pathname === "/compareproducts" ? "bg-blue-600" : ""
          } rounded`}
        >
          Compare Products
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
