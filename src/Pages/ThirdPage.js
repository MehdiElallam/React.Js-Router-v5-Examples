import React from 'react'
import { Switch, Link, useRouteMatch, useParams, Route } from 'react-router-dom'

function SubPage(){
    let { NameParam } = useParams(); 

    return(
        <div>
            <h2>SubPage with NameParam : { NameParam }</h2>
        </div>
    )
}

export default function ThirdPage() {
    let { path, url } = useRouteMatch()
    console.log(path,url)


    return (
        <>
             <h2>Third Page</h2>
             <nav>
                <ul>
                    <li>
                        <Link to={`${url}/3-1`}>Sub-page-1</Link>
                    </li>
                    <li>
                        <Link to={`${url}/3-2`}>Sub-page-2</Link>
                    </li>
                    <li>
                        <Link to={`${url}/3-3`}>Sub-page-3</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path={path} >
                    <h3>Please select a sub-page.</h3>
                </Route>
                <Route path={`${path}/:NameParam`} component={SubPage} />
            </Switch>
        </>
    )
}
