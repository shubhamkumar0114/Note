import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import toast from "react-hot-toast";
const initialState = {
  pastes: localStorage.getItem("paste")
    ? JSON.parse(localStorage.getItem("paste"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("paste", JSON.stringify(state.pastes));
      toast.success("Paste added");
    },
    deletePaste: (state , action) => {
      const id = action.payload;
      const index = state.pastes.findIndex(item => item.id === id)
      if(index >= 0){
      state.pastes.splice(index , 1)
      localStorage.setItem("paste", JSON.stringify(state.pastes))
      toast.success("Paste deleted");
      }
    },
    updatePaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex(item => item.id === paste.id)
      if(index >= 0){
         state.pastes[index] = paste;
         localStorage.setItem("paste", JSON.stringify(state.pastes));
         toast.success("Paste Updated");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, deletePaste, updatePaste } = pasteSlice.actions;

export default pasteSlice.reducer;
