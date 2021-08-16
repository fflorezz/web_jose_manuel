import React from 'react'

export default function PageTitle({ children }) {
  return (
    <h1 className="text-gray-300 border-b border-gray-100 lg:px-4">
      {children}
    </h1>
  )
}
