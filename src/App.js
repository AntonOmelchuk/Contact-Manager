import React from 'react';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddForm from './components/AddForm';
import {Switch, Route} from 'react-router-dom'
import About from './components/About';
import NotFound from './components/NotFound';
import EditContactWithRouter from './components/EditContact';

const App = () => (
    <div>
        <Header/>
        <Container>
            <Switch>
                <Route exact path='/' render={() => <Contacts />} />
                <Route exact path='/contacts/add' render={() => <AddForm />} />
                <Route exact path='/about' render={() => <About />} />
                <Route exact path='/edit/:id' render={() => <EditContactWithRouter />} />
                <Route render={()=> <NotFound />} />
            </Switch>
        </Container>
    </div>
);

export default (App);
