import GoogleMapsComponent from "@/components/Map";
import Map from "@/components/Map";
import Sidenav from "@/components/Sidebar";
import TimePicker from "@/components/TimePicker";
import { useLoadScript } from "@react-google-maps/api";
import React from "react";

function test() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM", // Add your API key
  });

  // return isLoaded ? <Map /> : null;
  return (
    <div style={{ marginTop: "200px" }}>
      {" "}
      <GoogleMapsComponent />
      {/* <TimePicker /> */}
    </div>
  );
}

export default test;
