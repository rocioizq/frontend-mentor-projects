import { useState } from 'react';

function Info() {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(!added);
    };

    return (
        <div className="text">
        <h1>PERFUME</h1>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
  
        <div className="prices">
          <span className="price1">$149.99</span>
          <span className="price2">$169.99</span>
        </div>
  
        <button onClick={handleClick}>
          <img src="/images/icon-cart.svg" alt="icon cart" />
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    );
}

export default Info;