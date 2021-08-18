import React from 'react'

const PlayIntro = ({ intro }) => {
  return (
    <div className="mt-10 italic text-justify sm:px-4">
      {intro.map((fragment, idx) => {
        return (
          <div key={idx} className="grid grid-cols-12">
            {fragment.character ? (
              <h5 className="text-sm font-medium text-gray-500 col-span-12">
                {fragment.character + ':'}
              </h5>
            ) : null}
            {fragment.paragraphs ? (
              <div
                className={fragment.character ? 'col-span-11' : 'col-span-12'}
              >
                {fragment.paragraphs.map((par, idx) => (
                  <p key={idx} className="text-sm">
                    {par}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default PlayIntro
