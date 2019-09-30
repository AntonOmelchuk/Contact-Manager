import React from 'react';
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Contacts from "./components/Contacts";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div>
      <Header />
      <Container>
          <AddForm />
        <Contacts />
      </Container>
    </div>
  );
}

export default App;
