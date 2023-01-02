import Card from './components/card';
import './Oppurtunities.css';
import Navbar from '../../Components/Navbar/Navbar';

function Oppurtunities() {
    return (
        <div id="oppurPage">
            <div id="oppurPageName">
                <Navbar />
                <h1 id="oppurHeader">Oppurtunities</h1>
                <div className="oppurSearchBar">
                    <input id="oppurSearchInput" type="search" placeholder="Search" />
                </div>
            </div>
            <div className="oppurContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Oppurtunities;
