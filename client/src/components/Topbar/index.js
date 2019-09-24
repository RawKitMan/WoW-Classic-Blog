import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

class Topbar extends React.Component {

    render() {
        return (
            <div>
                <Navbar className="bordering mb-3" style={{ height: '10rem' }, { width: '100vw' }}>
                    <Navbar.Brand>
                        <img
                            src="images/Warlock.jpg"
                            className="d-inline-block align-top warlock-size"
                            alt="Rawkitman"
                        />
                    </Navbar.Brand>

                    <p className="text-warning text-justify">The Adventures of a WoW Classic Warlock</p>

                </Navbar>
            </div>
        )
    }
}

export default Topbar;