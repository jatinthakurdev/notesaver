import React from "react";

function ProductList(props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {props.products.map((product, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] hover:-translate-y-2"
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-400/20 transition-all duration-500"></div>

            {/* Product Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Product
              </span>

              <span className="text-slate-500 text-sm font-medium">
                #{index + 1}
              </span>
            </div>

            {/* Product Name */}
            <h2 className="text-3xl font-extrabold text-white capitalize mb-8 tracking-wide">
              {product.name}
            </h2>

            {/* Price Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 mb-6">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">
                Price
              </p>

              <h1 className="text-5xl font-black text-cyan-400">
                ₹{product.price}
              </h1>
            </div>

            {/* Quantity */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-white">
                  Quantity
                </h3>

                <span className="text-cyan-400 text-2xl font-bold">
                  {product.quantity}
                </span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-3 text-xl font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:scale-95">
                  −
                </button>

                <button className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 text-xl font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;