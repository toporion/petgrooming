import React from 'react';

const ShopSideBar = ({ searchInput, setSearchInput, handleSearchSubmit }) => {
  return (
    <div className='w-64 bg-gray-100 p-4 h-full overflow-y-auto'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Shop Filters</h1>
        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search By Category or Name"
            className='w-full p-2 border border-gray-300 rounded mb-4'
          />
          <button type="submit" className="btn btn-sm btn-primary w-full mb-4">
            Search
          </button>
        </form>
      </div>

      <h2 className='text-xl font-bold mb-4'>Filter by Price</h2>
      <div className='mb-4'>
        <input type="range" min="0" max="1000" className='w-full' />
        <div className='flex justify-between text-sm'>
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>

      <h2 className='text-xl font-bold mb-4'>Product Categories</h2>
      <ul className='space-y-2'>
        <li><a href="#" className='text-blue-600 hover:underline'>Category 1</a></li>
        <li><a href="#" className='text-blue-600 hover:underline'>Category 2</a></li>
        <li><a href="#" className='text-blue-600 hover:underline'>Category 3</a></li>
        <li><a href="#" className='text-blue-600 hover:underline'>Category 4</a></li>
      </ul>
    </div>
  );
};

export default ShopSideBar;
