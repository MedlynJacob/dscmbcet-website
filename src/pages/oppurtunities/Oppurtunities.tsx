import card from './components/card';
import './Oppurtunities.css';

function Oppurtunities() {
    return (
        <div id="oppurPage">
            <div id="oppurPageName">
                <div id="oppurHeader">
                    <h1>logo</h1>
                    <button>About us</button>
                    <button>Events</button>
                    <button>Resources</button>
                    <button>Team</button>
                    <button>Opputunties</button>
                    <button>Join us</button>
                </div>
                <div>
                    <h1>Opputunities</h1>
                </div>
            </div>
            <div className="oppurContainer">
                {card()}
                {card()}
                {card()}
                {card()}
                {card()}
            </div>
        </div>
    );
}

export default Oppurtunities;
