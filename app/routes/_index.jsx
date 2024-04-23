import App from "../CRUD/App";
import { Link } from '@remix-run/react';
// import Testing from "../Testing";
// import CRUDComponent from "./components/CRUDComponent";
// import CRUDComponent from "../components/CRUDComponent";





export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to countries!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <App/>
      <Link to="/add-address">Add Address</Link>

      {/* <CRUDComponent/> */}
      {/* <Testing/> */}

    </div>
  );
}
