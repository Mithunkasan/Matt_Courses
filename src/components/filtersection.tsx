"use client"

// import { useState } from "react"

export const FilterSection = ({ 
  title, 
  options,
  selectedFilters,
  onFilterChange 
}: {
  title: string
  options: string[]
  selectedFilters: string[]
  onFilterChange: (filter: string) => void
}) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
      <h3 className="font-bold text-lg mb-3 pb-2 border-b-2 border-blue-500 inline-block">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedFilters.includes(option)}
              onChange={() => onFilterChange(option)}
              className="rounded text-blue-500 focus:ring-blue-400"
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}