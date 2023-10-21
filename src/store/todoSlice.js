import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ""
}

export const todoSlice = createSlice({
    name: 'todoing',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value=action.payload
            console.log(action.payload)



        },
        

        

           



        


    },
})

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions

export default todoSlice.reducer;