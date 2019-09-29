import React from 'react';
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Contacts />
      </Container>
    </div>
  );
}

export default App;
