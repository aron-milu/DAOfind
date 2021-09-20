import React, { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Dao from './Pages/Dao';
import { daolist } from './Data/daolist';
import Learn from './Pages/Learn';
function App() {
  const [daos, setDaos] = useState(daolist)
  const [search, setSearch] = useState('')
  useEffect(() => {
    setDaos(daolist)
  }, [])

  return (
    <Layout daos={daos} search={search} setSearch={setSearch}>
      <Route
        exact
        path='/'
        render={() => <Home daos={daos} setDaos={setDaos} search={search} />}
      />
      <Route
        exact
        path='/add'
        render={() => <Add daos={daos} setDaos={setDaos} />}
      />
      <Route
        exact
        path='/dao/:daoId'
        render={({ match, location }) => (
          <Dao location={location} match={match} />
        )}
      />
      <Route
        exact
        path='/dao/:daoId/edit'
        render={({ location }) => (
          <Add location={location} daos={daos} setDaos={setDaos} />
        )}
      />
      <Route exact path='/learn' render={() => <Learn />} />
    </Layout>
  )
}

export default App;
