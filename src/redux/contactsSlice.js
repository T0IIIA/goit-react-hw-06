import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  contacts: {
    items: []
  },
}


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = state.contacts.filter((item) => item.id !== action.payload)
    },
    deleteContact: (state, action) => {
      state.contacts.push(action.payload)
    },
  },
})

export const contactsReducer = contactsSlice.reducer
export const { addContact, deleteContact } = contactsSlice.actions
