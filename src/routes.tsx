import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../src/pages/Landing'
import TeachersList from '../src/pages/TeachersList'
import TeacherForm from './pages/TeacherForm'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeachersList}/>
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;