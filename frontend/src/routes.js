import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* Garante que apenas uma rota seja chamada por momento */}
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />

            </Switch>
        </BrowserRouter>
    );
}