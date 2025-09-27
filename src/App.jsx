import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Allcard from "./components/allcard.jsx";



const fetchData = async () => {
  const result = await fetch("/Customer.json");
  return result.json();
};

function App() {
  const fetchPromised = fetchData();

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Suspense fallback={`...Loading`}>
          <Allcard fetchPromised={fetchPromised}></Allcard>
        </Suspense>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
