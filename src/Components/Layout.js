import React from 'react';
import Sidebar from './Sidebar';
import Search from './Search';
function Layout(props) {
  const { daos, search, setSearch } = props
  return (
    <>
      <Sidebar />
      <div className='app'>
        <Search daos={daos} search={search} setSearch={setSearch} />
        {props.children}
      </div>
    </>
  )
}

export default Layout
