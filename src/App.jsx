
import MarqueeImport from "react-fast-marquee";
const Marquee = MarqueeImport.default;


function App() {

  const navItems = [
    { name: "Home" },
    { name: "Our Brands" },
    { name: "Skin Care", dropdown: ["Moisturizers", "Serums", "Sunscreens", "Eye Creams"] },
    { name: "Facial Kit", dropdown: ["Facial Kits", "Face Wash", "Face Scrubs", "Face Masks"] },
    { name: "Hair Care", dropdown: ["Shampoos", "Conditioners", "Hair Oils", "Serums"] },
    {
      name: "Fragrance",
      dropdown: ["Perfumes", "Body Sprays", "Deodorants", "Attars"],
    },
    { name: "Bundle & Discount" },
    { name: "Contact" },
  ];

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
      <div className="navbar bg-pink-500 text-white flex justify-center gap-10 py-4 relative">
        {navItems.map((item, index) => (
          <div key={index} className="group relative cursor-pointer">

            {/* Nav item with animated underline */}
            <div className="navItem relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              {item.name}
            </div>

            {/* Dropdown - only render if item has dropdown */}
            {item.dropdown && (
              <div className="dropdown absolute top-full left-1/2 -translate-x-1/2 mt-4 
                         bg-white text-black shadow-lg overflow-hidden
                         opacity-0 -translate-y-2 invisible
                         group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                         transition-all duration-300 z-50 min-w-[180px]">
                {item.dropdown.map((subItem, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-200"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Banner Image */}
      <div className="banner">
        <img src="/public/banner.jpg" alt="Banner" className="w-full h-auto" />
      </div>
    </>
  )
}

export default App
