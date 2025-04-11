import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsImageLoading(true)
    setLoading(true)

    // Simulate image generation
    setTimeout(() => {
      setImage(assets.sample_img_1) // Replace with real generated image
      setIsImageLoading(false)
      setLoading(false)
    }, 2000)
  }

  const handleGenerateAnother = () => {
    setIsImageLoading(true)
    setInput("")

    // Simulate new generation
    setTimeout(() => {
      setImage(assets.sample_img_1) // Replace with actual logic
      setIsImageLoading(false)
    }, 2000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-24 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 space-y-8 transition-all duration-500 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={image}
          alt="Generated preview"
          className="w-full rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        {isImageLoading && (
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full animate-pulse rounded-b-xl"></span>
        )}
      </div>

      {Loading && (
        <p className="text-center text-gray-700 font-semibold text-lg animate-pulse">
          Loading...
        </p>
      )}

      {!isImageLoading && (
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to generate"
            className="flex-1 w-full px-5 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            🚀 Submit
          </button>
        </div>
      )}

      {!isImageLoading && (
        <div className="flex justify-center gap-4 pt-6 border-t border-gray-300">
          <button
            type="button"
            onClick={handleGenerateAnother}
            className="px-5 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition duration-300"
          >
            🔄 Generate Another
          </button>

          <a
            href={image}
            download="generated_image.jpg"
            className="px-5 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition duration-300"
          >
            📥 Download
          </a>
        </div>
      )}
    </form>
  )
}

export default Result
