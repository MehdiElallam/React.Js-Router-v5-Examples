import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstPage from '../Pages/FirstPage'
import SecondPage from '../Pages/SecondPage'
import ThirdPage from '../Pages/ThirdPage'
import PageNotFound from '../Pages/PageNotFound'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route path="/second" component={SecondPage} />
            <Route path="/third" component={ThirdPage} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
