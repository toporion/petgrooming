import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxios from '../hook/UseAxios';
import ShopSideBar from '../components/ShopSideBar';

const Shop = () => {
  const axiosPublic = UseAxios();
  const [page, setPage] = useState(1);
  const [limit] = useState(4); // more cards per page
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products', page, limit, search],
    queryFn: async () => {
      const res = await axiosPublic.get('/get-all-products', {
        params: { page, limit, search }
      });
      return res.data.data;
    }
  });

  const conkateText = (wordLimit, text) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  if (isLoading) return <p className="text-center py-8">Loading...</p>;

  const { products, pagination } = data;

  return (
    <div className="flex gap-4 p-4 h-screen overflow-hidden">
      {/* Sidebar */}
      <ShopSideBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />

      {/* Products */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-auto p-1">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-md w-full h-[350px] flex flex-col"
            >
              <figure className="h-[150px] overflow-hidden">
                <img
                  src={product.productImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-4 flex flex-col justify-between">
                <div>
                  <h2 className="card-title text-base font-bold">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {conkateText(15, product.description)}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-600 font-bold">${product.sellPrice}</span>
                  <span className="badge badge-outline">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center gap-2 items-center py-4">
          <button
            className="btn btn-sm"
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
          {Array.from({ length: pagination?.totalPages || 1 }, (_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${page === i + 1 ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-sm"
            disabled={page === pagination?.totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
