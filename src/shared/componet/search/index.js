import React, { useState } from 'react';
import './search.scss';
import { FaSearch } from 'react-icons/fa';

export default function Search({ products, setFilteredProducts }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        setTimeout(performSearch, 300);
    };

    const performSearch = () => {
        if (!products) return; // Check if products is defined
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
    };

    return (
        <div>
            <div className="search_item">
                <input
                    className='input'
                    type="search"
                    placeholder='What are you looking for?'
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <div className="search_icon">
                    <FaSearch />
                </div>
            </div>
        </div>
    );
}
