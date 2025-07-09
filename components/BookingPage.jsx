'use client'

import React, { useState, useEffect } from 'react'

function BookingPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  })
  const [allBookings, setAllBookings] = useState([])
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ])
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Load bookings from localStorage on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('littleLemonBookings')
    if (savedBookings) {
      setAllBookings(JSON.parse(savedBookings))
    }
  }, [])

  // Update available times when date or bookings change
  useEffect(() => {
    if (formData.date) {
      const existing = allBookings.filter(b => b.date === formData.date)
      const bookedTimes = existing.map(b => b.time)
      setAvailableTimes([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
      ].filter(time => !bookedTimes.includes(time)))
    }
  }, [formData.date, allBookings])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.date) newErrors.date = 'Please select a date'
    if (!formData.time) newErrors.time = 'Please select a time'
    if (formData.guests < 1 || formData.guests > 10) newErrors.guests = 'Please enter between 1-10 guests'
    
    const isTimeBooked = allBookings.some(
      b => b.date === formData.date && b.time === formData.time
    )
    if (isTimeBooked) newErrors.time = 'This time slot is already booked'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsLoading(true)
      
      // Simulate API delay
      setTimeout(() => {
        const newBooking = {
          ...formData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString()
        }
        const updatedBookings = [...allBookings, newBooking]
        
        localStorage.setItem('littleLemonBookings', JSON.stringify(updatedBookings))
        setAllBookings(updatedBookings)
        setSubmitted(true)
        
        setTimeout(() => {
          setFormData({
            date: '',
            time: '',
            guests: 1,
            occasion: ''
          })
          setSubmitted(false)
        }, 3000)
        
        setIsLoading(false)
      }, 500)
    }
  }
  
  if (submitted) {
    return (
      <div className="min-h-screen bg-lemon-light py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-2xl font-bold text-lemon-dark mb-2">Reservation Confirmed!</h2>
          <p className="text-gray-600 mb-6">Your table has been successfully booked.</p>
          <p className="text-sm text-gray-500">
            {new Date(formData.date).toLocaleDateString()} at {formData.time} for {formData.guests} {formData.guests > 1 ? 'guests' : 'guest'}
            {formData.occasion && ` (${formData.occasion})`}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-lemon-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-lemon-dark text-center mb-8">Table Reservation</h1>
        
        {errors.submit && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {errors.submit}
          </div>
        )}
        
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Choose date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]} // Disable past dates
              className={`w-full px-4 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-lemon-primary focus:border-lemon-primary`}
              required
              disabled={isLoading}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Choose time</label>
            <select
              id="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-lemon-primary focus:border-lemon-primary`}
              required
              disabled={!formData.date || isLoading}
            >
              <option value="">Select a time</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
            {formData.date && availableTimes.length === 0 && (
              <p className="text-yellow-600 text-xs mt-1">No available times for this date</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of guests</label>
            <input
              type="number"
              id="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="1"
              min="1"
              max="10"
              className={`w-full px-4 py-2 border ${errors.guests ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-lemon-primary focus:border-lemon-primary`}
              required
              disabled={isLoading}
            />
            {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">Occasion</label>
            <select
              id="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-lemon-primary"
              disabled={isLoading}
            >
              <option value="">Select an occasion (optional)</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business Meeting</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || availableTimes.length === 0}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Make Your Reservation'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingPage