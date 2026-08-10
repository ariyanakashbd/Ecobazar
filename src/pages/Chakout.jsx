import { useState } from "react"
import Container from "../components/layouts/Container";
import green from '../assets/daitels/green.webp'
import red from '../assets/daitels/red.webp'

const inputClass = "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#cccccc]"

// screenshot এর মতো বড়, green ring + center dot দেখানোর জন্য কাস্টম radio ক্লাস
const radioClass = "appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-primry checked:bg-primry checked:shadow-[inset_0_0_0_3px_white] cursor-pointer transition-colors"

const Chakout = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [errors, setErrors] = useState({})
  const [placed, setPlaced] = useState(false)
  const items = [
    { name: "Green Capsicum", qty: 5, price: 14, image: green },
    { name: "Red Capsicum", qty: 1, price: 14, image: red },
  ]
  let subtotal = 0
  for (let i = 0; i < items.length; i++) {
    subtotal = subtotal + items[i].qty * items[i].price
  }
  const shipping = 0 
  const total = subtotal + shipping
  const handlePlaceOrder = () => {
    const newErrors = {}

    if (firstName === "") {
      newErrors.firstName = "First name is required"
    }
    if (lastName === "") {
      newErrors.lastName = "Last name is required"
    }
    if (country === "") {
      newErrors.country = "Please select a country"
    }
    if (state === "") {
      newErrors.state = "Please select a state"
    }
    if (zip === "") {
      newErrors.zip = "Zip code is required"
    }
    if (email === "") {
      newErrors.email = "Email is required"
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email address"
    }
    if (phone === "") {
      newErrors.phone = "Phone number is required"
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      console.log({
        firstName,
        lastName,
        company,
        country,
        state,
        zip,
        email,
        phone,
        notes,
        paymentMethod,
        total,
      })
      setPlaced(true)
    } else {
      setPlaced(false)
    }
  }

  return (
    <Container>
      <div className="flex flex-wrap gap-8 font-pop py-8">
        <div className="flex-[2] min-w-[300px]">
          <h2 className="text-[24px] font-pop font-medium text-[#1A1A1A] mb-5">Billing Information</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">First name</label>
              <input
                type="text"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">Last name</label>
              <input
                type="text"
                placeholder="Your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>

            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">
                Company Name <span className="text-[#808080] text-sm font-pop ">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-pop text-[#1A1A1A]">Street Address</label>
            <input type="text" placeholder="Street address" className={inputClass} />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">Country / Region</label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass}>
                <option value="">Select</option>
                <option value="BD">Bangladesh</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>

            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">States</label>
              <select value={state} onChange={(e) => setState(e.target.value)} className={inputClass}>
                <option value="">Select</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="khulna">Khulna</option>
              </select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>

            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">Zip Code</label>
              <input
                type="text"
                placeholder="Zip code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className={inputClass}
              />
              {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="flex-1 min-w-[150px]">
              <label className="text-sm font-pop text-[#1A1A1A]">Phone</label>
              <input
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center gap-2 font-pop text-sm text-[#4D4D4D]">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
              Ship to a different address
            </label>
          </div>

          <hr className="my-8 border-gray-200" />
          <h3 className="text-[24px] font-medium text-[#1A1A1A] mb-5">Additional Info</h3>
          <label className="text-sm text-[#1A1A1A] font-pop ">Order Notes (Optional)</label>
          <textarea
            rows={4}
            placeholder="Notes about your order, e.g. special notes for delivery"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={inputClass + " resize-none"}
          />
        </div>
        <div className="flex-1 min-w-[260px]">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-[24px] font-medium font-pop text-[#1A1A1A] mb-3">Order Summary</h3>
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm text-[#1A1A1A] font-pop mb-5">
                <span className="flex items-center gap-2">
                  <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                  {item.name} x{item.qty}
                </span>
                <span>${item.qty * item.price}</span>
              </div>
            ))}

            <div className="flex justify-between text-sm text-[#4D4D4D] font-pop mb-3.5">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-[#4D4D4D] border-t border-b py-3 border-[#cccccc] font-pop ">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="mt-3.5 flex justify-between text-sm text-[#4D4D4D] font-pop mb-3.5">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <h4 className="text-[24px] font-medium text-[#1A1A1A] font-pop mt-6 mb-4">Payment Method</h4>

            <label className="flex items-center gap-3 text-sm mt-2 cursor-pointer text-[#4D4D4D] ">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className={radioClass}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-3 text-sm mt-2 cursor-pointer text-[#4D4D4D]">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className={radioClass}
              />
              Paypal
            </label>

            <label className="flex items-center gap-3 text-sm mt-2 cursor-pointer text-[#4D4D4D] ">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "amazonpay"}
                onChange={() => setPaymentMethod("amazonpay")}
                className={radioClass}
              />
              Amazon Pay
            </label>
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-5 bg-primry hover:bg-green-700 text-white text-sm font-medium py-3 rounded-full transition-colors"
            >
              Place Order
            </button>
            {placed && (
              <p className="text-primry text-center text-sm mt-3">Order placed successfully!</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Chakout