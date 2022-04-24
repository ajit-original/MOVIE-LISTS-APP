import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import myData from '../assets/data.json';


class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        this.setState({
            data: myData,
            loading: false
        })
    }

    render() {
        
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading...Br</div>
        }

        return (
            <div className='row'>
                {data.map(movie =>
                    <div className='col-sm-2' key = { movie.id }>
                        <Card movie = { movie } />
                    </div>
                )}
            </div>
                
        );
    }
}

export default List;