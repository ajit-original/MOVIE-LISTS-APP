import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
    
    return (
        <div className='container align-middle'>
            <nav className='navbar sticky-top navbar-light bg-success'>
                <h1 className='navbar-brand text-light text-right'>LIST OF BLOCKBUSTER MOVIES</h1>
            </nav>

            <List />
        </div>
    );
};


export default App;
