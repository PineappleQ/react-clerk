import * as React from 'react';
import { Link } from 'react-router-dom';

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Link to="/table">Table</Link>
            </div>
        );
    }
}