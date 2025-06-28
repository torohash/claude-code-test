import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-7xl mx-auto p-8 text-center">
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      <div className="p-8">
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 cursor-pointer transition-colors duration-300 hover:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">src/App.tsx</code>{' '}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
