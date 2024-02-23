import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout.jsx'
import myContext from '../../context/data/myContext.jsx';

function home() {
  const context = useContext(myContext);
  console.log(context)
  return (
    <div>
      <Layout>
        <h1>Name :{context.state.name} </h1>
        <h1>Age :{context.state.age} Year's</h1>
        <h1>Color:{ context.color}</h1>
      </Layout>
    </div>
  )
}

export default home