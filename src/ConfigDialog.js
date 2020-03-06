import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LineDropdown from './LineDropdown.js'
import RadioButton from './RadioButton.js'


let radioList = ['one', 'two', 'three'];
//<RadioButton radioData={['one', 'two', 'three','four']} radioTitle='This is Radio Titlez'/>

const page3 = () => {
    return ( 
        <>
        <h1>Tab 3!</h1>
        <br/>
        <RadioButton radioData={radioList} radioTitle='This is Radio 3a!'/>
        <br/>
        <RadioButton radioData={radioList} radioTitle='This is Radio 3b!'/>
        </>
    )
}



class ConfigDialog extends Component {
    render() {
        return(
            <Router>
                <div className="container">
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/tab3">Page 3</Link> </li>
                <li> <Link to="/tab4">Page 4</Link> </li>
                <li> <Link to="/tab5">Page 5</Link> </li>
                </div>

                <Route path="/" exact strict render={
                    ()=> { return ( <h1>Welcome Home</h1> ) }
                }/>

                <Route path="/about" exact strict render={
                    ()=> { return ( <h1>Page 2</h1> ) }
                }/>

                <Route path="/tab3" exact strict component={page3} />

                <Route path="/tab4" exact strict render={
                    ()=> { return ( <LineDropdown /> ) }
                }/>

                <Route path="/tab5" exact strict render={
                    ()=> {return( 
                        <>
                        <LineDropdown />
                        <br/>
                        <RadioButton radioData={radioList} radioTitle='This is Radio Titlez'/>
                        </>
                    )}
                }/>

            </Router>
        )
    }
}

export default ConfigDialog

/*

            <h1>Tableau Extension D3 Sankey Diagram ConfigDialog.</h1>

            <LineDropdown />
            <br/>
            <RadioButton radioData={radioList} radioTitle='This is Radio Titlez'/>



import React from 'react';
import { Pill } from '@tableau/tableau-ui'
import { DropdownSelect } from '@tableau/tableau-ui'

const items = [
    { value: 'alpha'},
    { value: 'bravo'},
    { value: 'charlie'},
    { value: 'delta'},
    { value: 'echo'}
]

const makeDefaultOption = (strInput, index) =>
    <option disabled selected="selected">{strInput}</option>

const makeOption = (item, index) => 
    <option disabled={item.disabled || item.separator} key={index} value={item.value}>{item.value}</option>;


class ConfigDialog extends React.Component {
    render() {
        return(
            <>
            <h1>Tableau Extension D3 Sankey Diagram ConfigDialog.</h1>

            <div style={{width: 150}}>
                <Pill kind='discrete'>Discrete</Pill><br/>
                <Pill kind='continuous'>Continuous</Pill><br/>
                <Pill kind='other'>Other</Pill><br/>
                <Pill kind='invalid'>Invalid</Pill><br/>
            </div>

            <DropdownSelect kind='line'>
                {makeDefaultOption('Please select dimension')}
                {items.map(makeOption)}
            </DropdownSelect>
            </>
        )
    }
}

export default ConfigDialog

*/