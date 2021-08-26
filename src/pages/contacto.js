import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'

const Contacto = () => {
  function handleSubmit() {
    console.log('SUBMIT')
  }

  return (
    <Layout>
      <PageTitle>Contacto</PageTitle>
      <p className="px-4 mt-4 text-gray-400">
        Para mayor información sobre la obra de José Manuel ponte en contacto:
      </p>
      <form action="" className="px-4 mt-4 ">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Tu nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Tu email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="about" className="block font-medium text-gray-700">
              About
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows="3"
                className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          className="mt-8 bg-indigo-600 py-2 px-16 text-white rounded hover:bg-indigo-900 font-medium"
          type="button"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </Layout>
  )
}

export default Contacto
