import React from 'react'

const ProductHeroSection = ({product}) => {
  return (
            <section className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1.2fr] items-start">
          <div className="rounded-[32px] bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
            <div className="overflow-hidden rounded-[24px] bg-[#FFF7E2]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="font-[Nunito]">
            <h1 className="text-[22px] md:text-[24px] font-semibold text-[#333333] leading-snug">
              {product.title}
            </h1>
            <p className="mt-3 text-sm text-[#4F4F4F]">
              {/* temporary description – you can add real field in data later */}
              This is the main product detail page. Here you can show
              description, price, size, rating, add-to-cart button, tabs
              like Highlights / Key Ingredients / How to use / FAQ etc.
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm font-semibold">
              <span className="text-[#2F7B4A]">{product.price}</span>
              <span className="text-[#828282]">· {product.size}</span>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-[#2F7B4A] px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#245d37] transition"
            >
              Add to Cart
            </button>
          </div>
        </section>
  )
}

export default ProductHeroSection