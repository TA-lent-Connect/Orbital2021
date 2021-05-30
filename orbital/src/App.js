import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Module from './components/Module'

function App() {
  const [modules, setModules] = useState([]);
  const [newFind, setNewFind] = useState('')

  useEffect(() => {
    axios
      .get('https://api.nusmods.com/v2/2020-2021/moduleInfo.json')
      .then(response => {
        setModules(response.data)
      })
  }, [])

  function handleFindChange(event) {
    setNewFind(event.target.value)
  }

  const modulesToShow = modules.filter(module => {
    return module.moduleCode.includes(newFind)
  })

  return (
    <div>
      <form>
          <label>
            find modules:
            <input
              value={newFind}
              onChange={handleFindChange}
            />
          </label>
        </form>
        <div>
          {modulesToShow.map(module => 
              <Module key={module.moduleCode} module={module} />
          )}
        </div>
    </div>
  )
}

export default App
