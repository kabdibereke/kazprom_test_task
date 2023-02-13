import { useEffect, useState } from 'react'
import ButtonWrapper from './components/ButtonWrapper/ButtonWrapper'
import ListItems from './components/ListItems/ListItems'
import Modal from './components/Modal/Modal'
import Layout from './Layout/Layout'
import { useSelector } from 'react-redux'
import {RootState } from './store/store'

function App() {
  
  const {isOpenAdd,isOpenDel} = useSelector((state: RootState) => state.modal)
  return (
    <Layout>
      <ButtonWrapper />
      <ListItems/>
      {isOpenAdd && <Modal types='add'/>}
      {isOpenDel && <Modal types='del'/>}
    </Layout>
  )
}

export default App
