import Card from './components/card';
import './Oppurtunities.css';
import Navbar from '../../Components/Navbar/Navbar';

function Oppurtunities() {
    return (
        <div id="oppurPage">
            <Navbar />
            <div id="oppurPageName">
                <h1 id="oppurHeader">Oppurtunities</h1>
                <div className="oppurSearchBar">
                    <input id="oppurSearchInput" type="search" placeholder="Search" />
                    <button id="oppurSearchClearButton" type="reset">
                        X
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div className="oppurContainer">
                    <Card vals={{ header: 'This is the header', desc: 'This is the description', domain: 'Domain' }} />
                    <Card vals={{ header: 'This is the header', desc: 'This is the description', domain: 'Domain' }} />
                    <Card vals={{ header: 'This is the header', desc: 'This is the description', domain: 'Domain' }} />
                    <Card vals={{ header: 'This is the header', desc: 'This is the description', domain: 'Domain' }} />
                    <Card vals={{ header: 'This is the header', desc: 'This is the description', domain: 'Domain' }} />
                    <Card vals={{ header: 'This is the header', desc: 'This is the description', domain: 'Domain' }} />
                </div>
            </div>
        </div>
    );
}

export default Oppurtunities;
