import React from 'react'

const GptSearch = () => {
  return (
    <div>  
<form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-2 pl-10 text-md text-gray-100 border border-gray-500 rounded-lg bg-black bg-opacity-20 focus:ring-green-500 focus:border-green-500 " placeholder="Search with best AI recommendation..." required/>
        <button type="submit" className="text-white absolute right-0.5 bottom-0.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 ">Search</button>
    </div>
</form>

    </div>
  )
}

export default GptSearch