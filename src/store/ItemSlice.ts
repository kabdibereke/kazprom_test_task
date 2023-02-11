import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../interface/todo'

interface IitemState {
    todo:ITodo[],
    id:string
}

const initialState:IitemState= {
    todo: [
    {
     id:"F5m4kKFWTLQBT52B_JLuawdo",
     title:'Другие мои работы можно посмотреть на моем     гитхабе, там есть ссылки на деплои каждого проекта'  
    },
    {
        id:"F5m4kKFWTLQBawfwaT52B_JLawdwfuawdo",
        title:'https://github.com/kabdibereke97'  
    },
    ],
    id:''
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state,action) => {
        state.todo.push({
            ...action.payload,
        });
    },
    removeItems: (state, action) => {
        state.todo = state.todo.filter(
            (item) => item.id !== action.payload,
        );
        state.id=''
    },
    deleteAllItems: (state) => {
        state.todo = [];
    },
    getId: (state,action)=> {
        state.id = action.payload
    },
    clearId: (state)=> {
        state.id=''
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem,deleteAllItems,removeItems,getId,clearId } = itemSlice.actions

export default itemSlice.reducer