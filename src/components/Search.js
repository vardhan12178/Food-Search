import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';
import '../index.css'; 
import Cart from './Cart';

const data = [
    {
        id: 1,
        name: "Chicken Fry Biryani",
        description: "A flavorful biryani with crispy fried chicken.",
        price: 180,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/n0npykj9rztkzx3lumqb"
    },
    {
        id: 2,
        name: "Chicken Dum Biryani",
        description: "Aromatic and flavorful biryani made with chicken and spices.",
        price: 160,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f169fa459d96b85cff76e91328bffb7f"
    },
    {
        id: 3,
        name: "Mutton Biryani",
        description: "A rich and savory biryani made with tender mutton.",
        price: 200,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/dryxxkkc6snios2kegxz"
    },
    {
        id: 4,
        name: "South Indian Veg Thali",
        description: "A traditional South Indian vegetarian meal.",
        price: 250,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/rimvisbyrwmwrpp0f1eb"
    },
    {
        id: 5,
        name: "Curd Rice",
        description: "A simple and refreshing dish made with curd and rice.",
        price: 80,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/2774a73dfbcdbbdfa855e64302503d87"
    },
    {
        id: 6,
        name: "Fried Rice",
        description: "A classic dish of rice stir-fried with vegetables and sauces.",
        price: 100,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/lrvqrtegzk5yrz59syum"
    }
];

const Search = () => {
    const [searchData, setSearchData] = useState('');
    const [newData, setNewData] = useState(data);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchData(value);
        const filteredData = data.filter(item => item.name.toLowerCase().includes(value));
        setNewData(filteredData);
    };

    const handleOrder = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleIncrease = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
    };

    const handleDecrease = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity -= 1;
        } else {
            newCartItems.splice(index, 1);
        }
        setCartItems(newCartItems);
    };

    const handleCartClick = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        setCartItems([]);
        setShowCart(false);
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="styled-heading">Food Search</h1>
                <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handleCartClick}>
                    <FaShoppingCart size={30} />
                    {cartItems.length > 0 && (
                        <span 
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px',
                                background: 'red',
                                borderRadius: '50%',
                                padding: '5px 10px',
                                color: 'white',
                                fontSize: '12px'
                            }}
                        >
                            {cartItems.length}
                        </span>
                    )}
                </div>
            </div>
            <div className="mb-4">
                <input 
                    type="search" 
                    className="form-control" 
                    value={searchData} 
                    onChange={handleChange} 
                    placeholder="Search for a dish..." 
                />
            </div>
            <div className="row">
                {newData.map(item => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={item.image} className="card-img-top fixed-image-size" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Price: </strong>{item.price}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleOrder(item)}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Cart 
                show={showCart} 
                handleClose={handleCloseCart} 
                cartItems={cartItems} 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease} 
                handleCheckout={handleCheckout} 
            />
        </div>
    );
};

export default Search;
