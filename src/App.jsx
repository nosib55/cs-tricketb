import { Suspense } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Allcard from "./components/allcard.jsx";
import Loading from "./components/Loading.jsx";
import { ToastContainer } from "react-toastify";

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
        <Suspense fallback={<Loading></Loading>}>
          <Allcard fetchPromised={fetchPromised}></Allcard>
        </Suspense>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
