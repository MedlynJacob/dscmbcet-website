import Card from './components/card';
import './Oppurtunities.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useState } from 'react';

function Oppurtunities() {
    const [srcstr, setSrcStr] = useState('');
    let cardArray = [
        { header: 'is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
    ];
    const filteredCardArray = cardArray.filter((name) => {
        return name.header.toLowerCase().includes(srcstr);
    });
    return (
        <div id="oppurPage">
            <Navbar />
            <div id="oppurPageName">
                <h1 id="oppurHeader">Oppurtunities</h1>
                <div className="oppurSearchBar">
                    <input
                        id="oppurSearchInput"
                        type="text"
                        placeholder="Search"
                        value={srcstr}
                        onChange={(e) => setSrcStr(e.target.value)}
                    />
                    <button id="oppurSearchClearButton" type="reset" onClick={() => setSrcStr('')}>
                        X
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div className="oppurContainer">
                    {filteredCardArray.map((name) => (
                        <Card vals={name} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Oppurtunities;
