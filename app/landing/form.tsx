export default function Form() {
    return (
      <div className="flex justify-center w-full min-h-screen py-6">
        <div className="flex flex-col w-full max-w-4xl gap-8 h-full border border-[#80808047] rounded-xl p-6">
          
          <div className="flex flex-row justify-between items-center">
            <div className="p-3 text-xs max-w-lg bg-gray-100 border border-[#80808047] rounded">
              <span className="text-[#39a2d6] font-bold">IMPORTANT:</span> Please enter traveler names as they appear on passport or driver’s license. Use preferred name for anything different.
            </div>
            <div className="flex items-center flex-row gap-3">
              <span className="font-bold text-[#39a2d6]">How Many Traveling?</span>
              <select className="text-xs border border-[#80808047] rounded p-2">
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
                <option>4 Travelers</option>
                <option>5 Travelers</option>
                <option>6 Travelers</option>
                <option>7 Travelers</option>
                <option>8 Travelers</option>
                <option>9 Travelers</option>
                <option>10 Travelers</option>
              </select>
            </div>
          </div>
  
          <div className="flex w-full justify-center">
            <div className="flex flex-col w-full gap-6">
              <h2 className="text-lg font-semibold">Traveler #1</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">First Name *</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Middle Name</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Last Name *</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" />
                </div>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Preferred Name</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Email Address *</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="email" />
                </div>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Home Phone</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="tel" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Mobile Phone *</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="tel" />
                </div>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Birth Date *</label>
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="date" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Gender *</label>
                  <select className="px-3 py-2 border border-[#80808047] rounded">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
  
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-600">Address</label>
                <input className="px-3 py-2 border border-[#80808047] rounded" type="text" placeholder="Street Address" />
                <input className="px-3 py-2 border border-[#80808047] rounded" type="text" placeholder="Street Address 2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" placeholder="City" />
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" placeholder="State / Province" />
                  <input className="px-3 py-2 border border-[#80808047] rounded" type="text" placeholder="Postal Code" />
                </div>
                <select className="px-3 py-2 border border-[#80808047] rounded">
                  <option>US</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Other</option>
                </select>
              </div>
  
              <div className="flex justify-between mt-6">
                <button className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300">Back</button>
                <button className="px-6 py-2 bg-[#39a2d6] text-white rounded hover:bg-[#2e8bbf]">Choose Options</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  