import MarqueeImport from "react-fast-marquee";
const Marquee = MarqueeImport.default;
import { useState, useEffect } from "react";
function App() {

  const Images = ['/public/blocker.webp', '/public/banner.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const navItems = [
    { name: "Home" },
    { name: "Our Brands", dropdown: ["Golden Pearls", "Fairs & Lovely", "Medora"] },
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


  const products = [
    { img: "/perfume.jpg", alt: "perfume", name: "Blue De Blue Fragrance 100ml" },
    { img: "/facewash.jpg", alt: "facewash", name: "Blue De Blue Fragrance 100ml" },
    { img: "/shampos.jpg", alt: "shampoo", name: "Blue De Blue Fragrance 100ml" },
    { img: "/faceCream.jpg", alt: "face cream", name: "Blue De Blue Fragrance 100ml" },
    { img: "/perfume.jpg", alt: "perfume", name: "Blue De Blue Fragrance 100ml" },
    { img: "/facewash.jpg", alt: "facewash", name: "Blue De Blue Fragrance 100ml" },
    { img: "/shampos.jpg", alt: "shampoo", name: "Blue De Blue Fragrance 100ml" },
    { img: "/faceCream.jpg", alt: "face cream", name: "Blue De Blue Fragrance 100ml" },
  ];
  return (
    <>
      <Marquee className="marqueTag w-full bg-pink-500 text-white text-center py-2" speed={100}>
        AB MILAY GA SUB EK CLICK PY! FLAT 20% OFF
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
        <div className="actions hidden min-[900px]:flex items-center justify-end gap-4">

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

        {/* Now creating hangburger menu for mobile view */}
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex min-[900px]:hidden justify-end"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>



      {/* Nav Bar */}
      <div className="navbar bg-pink-500 text-white hidden min-[900px]:flex justify-center gap-10 py-4 relative">
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


      {/* Slide-in Drawer Menu */}
      <div
        className={`mobileMenu fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 
              transform transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src="/logo.png" alt="Logo" className="w-24" />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 border-b-2 border-gray-300 px-2 py-1 focus:outline-none focus:border-pink-500"
          />
          <img src="/icons8-search-50.png" alt="" className="w-6" />
        </div>

        {/* Wishlist & Cart */}
        <div className="flex items-center justify-around px-4 py-3 border-b">
          <button className="flex items-center gap-2 text-sm">
            <img src="/icons8-heart-50.png" alt="" className="w-6" /> Wishlist
          </button>
          <button className="flex items-center gap-2 text-sm">
            <img src="/icons8-cart-50.png" alt="" className="w-6" /> Cart
          </button>
        </div>

        {/* Nav items as accordion */}
        <div className="flex flex-col overflow-y-auto h-[calc(100%-180px)]">
          {navItems.map((item, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() =>
                  item.dropdown
                    ? setOpenDropdown(openDropdown === index ? null : index)
                    : setMenuOpen(false)
                }
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              >
                {item.name}
                {item.dropdown && <span>{openDropdown === index ? "−" : "+"}</span>}
              </button>

              {item.dropdown && openDropdown === index && (
                <div className="flex flex-col bg-gray-50">
                  {item.dropdown.map((subItem, i) => (
                    <div key={i} className="px-8 py-2 text-sm text-gray-700">
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* Banner Image */}
      <div className="banner relative w-full h-auto overflow-hidden">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className={`w-full h-auto absolute top-0 left-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        {/* Spacer to maintain height since images are absolute */}
        <img src={Images[0]} alt="" className="w-full h-auto opacity-0 pointer-events-none" />
      </div>

      {/* rounded items */}

      <div className="postNav flex flex-col min-[800px]:flex items-center gap-20 py-8">
        <div className="why px-9 text-xl">Why Customers Choose Us:</div>
        <div className="round flex gap-4">
          <div className="roundedItem">
            <img src="/rounded1.jpg" alt="r1" className="w-40 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer" />
          </div>
          <div className="roundedItem">
            <img src="/roundd2.jpg" alt="r1" className="w-40 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer" />
          </div>
          <div className="roundedItem">
            <img src="/rounded3.jpg" alt="r1" className="w-40 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer" />
          </div>
        </div>
      </div>

      {/* bundels and discounts */}
      <div className="flex items-center gap-6 my-6 px-10">
        <div className="flex-1 border-t-2 border-gray-700"></div>
        <span className="text-lg font-semibold whitespace-nowrap">Bundles and Discounts</span>
        <div className="flex-1 border-t-2 border-gray-700"></div>
      </div>

      <div className="v text-center underline text-gray-600"><a href="" className="link">view all</a></div>

      <div className="itemsToCart grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 my-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="itemsCart border-2 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center flex flex-col gap-2"
          >
            <img
              src={product.img}
              alt={product.alt}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="font-medium">{product.name}</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            <div className="price text-pink-500 bg-pink-100 p-2 rounded-md hover:cursor-pointer">
              Rs. 1,500
            </div>
          </div>
        ))}
      </div>

      {/* showmore button */}
      <button className="showMore block mx-auto my-6 px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-300 w-1/4">Show More</button>

      {/* bottom Image */}
      <div className="bottomBanner mt-10">
        <img src="/public/bottomImg.jpg" alt="Bottom Banner" className="w-full h-auto" />
      </div>

      {/* footer */}
      <footer className="bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Your Company</h2>
            <p className="text-sm text-gray-400">
              Premium beauty and personal care products delivered with trust and style.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm text-gray-400">
              <span>muhammadfaizan4154@gmail.com</span>
              <span className="hidden sm:inline">·</span>
              <span>UAN 111-004422</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#" className="hover:text-pink-400 transition-colors">Home</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Our Brands</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Skin Care</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Hair Care</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Fragrance</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-4">
              Follow us for the latest offers, product launches, and beauty tips.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          &copy; Developed By Muhammad Faizan 🧑‍💻| 2026 | All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
