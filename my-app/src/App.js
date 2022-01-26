import React from "react"
import logo from './logo.svg';
import './App.css';
import QrReader from "react-qr-scanner";


function App() {

  return (
    <div className="App">
      <QrReader
        delay={1000}
        style={{
            height: "500px",
            width: "500px",
        }}
        onError={(error) => {
          console.error(error)
        }}
        facingMode="front"
        onScan={(data) => {
          console.log("scanning")
        }}
      />
    </div>
  );
}

export default App;
