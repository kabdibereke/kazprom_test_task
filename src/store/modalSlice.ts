import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  isOpenAdd: boolean,
  isOpenDel:boolean
}

const initialState: ModalState = {
    isOpenAdd: false,
    isOpenDel:false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAdd: (state) => {
      state.isOpenAdd= true
    },
    openDel: (state) => {
        state.isOpenDel= true
    },
    closeAdd: (state) => {
      state.isOpenAdd= false
    },

    closeDel: (state) => {
        state.isOpenDel= false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { openAdd, closeDel,closeAdd,openDel } = modalSlice.actions

export default modalSlice.reducer