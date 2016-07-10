import React from 'react';
import DropzoneUtil from './DropzoneUtil';
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
                <DropzoneUtil />   
            </div>
        );
    }
}

export default Home;
