import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    subjects: [],
}

export const Subjectslice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    addsubject: (state,action)=>{
      state.subjects.push(action.payload);
    }
    },
    
})

// Action creators are generated for each case reducer function
export const { addsubject } = Subjectslice.actions

export default Subjectslice.reducer