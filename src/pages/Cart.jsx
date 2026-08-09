import { useState, useMemo } from "react"
import { Minus, Plus, X } from "lucide-react"
import Container from "../components/layouts/Container"
import red from '../assets/daitels/red.webp'
import green from '../assets/daitels/green.webp'

const initialCartItems = [
  {
    id: 1,
    name: "Green Capsicum",
    price: 14,
    quantity: 5,
    image: green
  },
  {
    id: 2,
    name: "Red Capsicum",
    price: 14,
    quantity: 1,
    image: red
  },
]

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")
  const [couponMessage, setCouponMessage] = useState(null)

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponMessage({ type: "error", text: "Please enter a coupon code." })
      return
    }
    
    setCouponMessage({
      type: "error",
      text: `Coupon "${couponCode}" is not valid.`,
    })
  }

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )
  const shipping = 0 
  const total = subtotal + shipping

  return (
    <Container>
      <div className="w-full mt-6 md:mt-10 px-2 sm:px-0">
        <h1 className="text-2xl sm:text-[32px] font-semibold font-pop md:text-3xl text-center font-bold text-[#1A1A1A] mb-6 md:mb-8">
          My Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-[#666666]">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            
            {/* Main Cart Content */}
            <div className="w-full lg:flex-1 bg-white rounded-xl border border-gray-200 p-4 md:p-6">
              
              {/* Desktop Table Header */}
              <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 pb-4 border-b border-gray-100 text-xs font-semibold tracking-wider text-[#666666] uppercase">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-start sm:items-center py-5 relative"
                  >
                    {/* Remove button for mobile (Top Right) */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-primry transition absolute top-5 right-0 sm:hidden"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X size={18} />
                    </button>

                    {/* Product */}
                    <div className="flex items-center gap-4 pr-6 sm:pr-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <span className="font-normal text-[#1A1A1A] font-pop text-base">
                        {item.name}
                      </span>
                    </div>

                    {/* Mobile details layout */}
                    <div className="w-full sm:w-auto flex items-center justify-between sm:contents">
                      {/* Price */}
                      <div className="text-[#1A1A1A] font-pop font-normal text-base">
                        <span className="md:hidden text-xs text-gray-400 block">
                          Price
                        </span>
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div>
                        <span className="md:hidden text-xs text-[#666666] block mb-1">
                          Quantity
                        </span>
                        <div className="inline-flex items-center gap-2 sm:gap-3 border border-gray-200 rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center rounded-full text-[#1A1A1A]"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-4 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center rounded-full text-[#1A1A1A]"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div>
                        <span className="md:hidden text-xs text-[#1A1A1A] block">
                          Subtotal
                        </span>
                        <span className="font-normal text-base font-pop text-[#1A1A1A]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Desktop Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hidden sm:block text-gray-400 hover:text-primry transition justify-self-end"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 mt-2">
                <button className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold font-pop text-[#4D4D4D] text-center">
                  Return to shop
                </button>
                <button className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold font-pop text-[#4D4D4D] text-center">
                  Update Cart
                </button>
              </div>

              {/* Coupon Section */}
              <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl border mt-6 border-gray-200 p-4 sm:p-6">
                <h2 className="font-medium text-lg sm:text-[20px] font-pop md:w-40 text-[#1A1A1A] md:mt-1.5">
                  Coupon Code
                </h2>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center relative gap-2 sm:gap-0">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full sm:pr-36 px-4 py-2.5 rounded-full sm:rounded-r-none border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="w-full sm:w-auto sm:absolute right-0 top-0 bottom-0 px-6 py-2.5 rounded-full bg-[#333333] hover:bg-black text-white text-sm font-medium transition whitespace-nowrap"
                    >
                      Apply Coupon
                    </button>
                  </div>
                  {couponMessage && (
                    <p
                      className={`mt-3 text-sm ${
                        couponMessage.type === "error"
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {couponMessage.text}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Cart Totals Side Card */}
            <div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
                <h2 className="font-medium text-lg sm:text-[20px] text-[#1A1A1A] mb-4">
                  Cart Total
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between font-pop font-medium text-sm text-[#4D4D4D]">
                    <span>Subtotal</span>
                    <span className="text-[#1A1A1A] font-pop text-[14px] font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-pop font-medium text-sm text-[#4D4D4D]">
                    <span>Shipping</span>
                    <span className="text-[#1A1A1A] font-pop text-[14px] font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-pop font-medium text-sm text-[#4D4D4D] pt-2 border-t border-gray-100">
                    <span>Total:</span>
                    <span className="text-[#1A1A1A] font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 rounded-full bg-primry hover:bg-green-700 text-white font-medium transition">
                  Proceed to checkout
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </Container>
  )
}

export default Cart