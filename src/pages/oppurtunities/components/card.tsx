import React from 'react';
import './card.css';
function Card() {
    return (
        <div className="cardContainer">
            <h1 className="cardTittle">This is the Header area</h1>
            <p className="cardDesc">This is the description area</p>
            <div id="logo">
                <p style={{ padding: 10, backgroundColor: '#1A1A1A', borderRadius: 20, color: 'white' }}>Design</p>
                <p style={{ padding: 10, fontSize: 24, color: 'white' }}>
                    12000<span style={{ fontSize: 14 }}>/mo</span>
                </p>
            </div>
        </div>
    );
}

export default Card;
