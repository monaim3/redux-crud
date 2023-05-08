import { createSlice } from "@reduxjs/toolkit";
import uuid4 from "uuid4";
const initialState={
    books:[{id:uuid4(),title:"Bangladesh", Author:"Samima Sraboni"},
    {id:uuid4(),title:"kalai", Author:"Munira"}]
}
export const BookSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: {
      showBooks: (state) =>state,
      addbooks: (state,action) => {
       state.books.push(action.payload)
      },
      updatebooks: (state,action) => {
        const {id,title,Author}=action.payload
        const exits=state.books.filter(ele=>ele.id=id)
        if(exits){
             exits[0].title=title
             exits[0].Author=Author
        }
      },
      deletebooks: (state,action) => {
        const id=action.payload;
        state.books=state.books.filter(ele=>ele.id !==id)
       },
    },
  })
  export const { showBooks,addbooks,updatebooks,deletebooks} = BookSlice.actions

export default BookSlice.reducer