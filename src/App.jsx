
import MarqueeImport from "react-fast-marquee";
const Marquee = MarqueeImport.default;


function App() {


  return (
    <>
      <Marquee className="marqueTag w-full bg-pink-500 text-white text-center py-2" speed={100}>
        AB MILAY GA SUB EK CLICK PY! FLAT 20% OFF,
      </Marquee>
      {/* Pre Nav Bar */}
      {/* Pre Nav Bar */}
      <div className="preNav grid grid-cols-3 items-center px-4 py-2 bg-gray-100">

        {/* Left: Support text */}
        <div className="support font-bold text-sm">
          Customer Support: UAN 111-004422
        </div>

        {/* Center: Logo */}
        <div className="logo flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-32" />
        </div>

        {/* Right: Search + Icons */}
        <div className="actions flex items-center justify-end gap-4">

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border-b-2 border-gray-300 px-2 py-1 focus:outline-none focus:border-pink-500"
            />
            <button aria-label="Search" className="ml-2 hover:cursor-pointer">
              <img src="/icons8-search-50.png" alt="" className="w-8" />
            </button>
          </div>

          <button aria-label="Wishlist" className="heart hover:cursor-pointer">
            <img src="/icons8-heart-50.png" alt="" className="w-8" />
          </button>

          <button aria-label="Cart" className="basket hover:cursor-pointer">
            <img src="/icons8-cart-50.png" alt="" className="w-8" />
          </button>

        </div>
      </div>
      {/* Nav Bar */}
      <div className="navbar bg-pink-500 text-white flex justify-center gap-10 py-4">
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Home
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Our Brands
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Skin Care
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Facial Kit
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Hair Care
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Fragrance
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Bundle & Discount
        </div>
        <div className="navItem relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </div>
      </div>
    </>
  )
}

export default App
