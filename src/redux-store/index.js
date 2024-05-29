// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { redirect } from "react-router-dom";

// const bagItems = {
//   bagVal: [],
// };

// localStorage.setItem("bagVal", JSON.stringify(bagItems));

// const initialState = JSON.parse(localStorage.getItem("bagVal"));

// const bagSlice = createSlice({
//     name: "bag",
//     initialState,
//     reducers: {
//         addToBag: (state, action) => {
//             state.bagVal = [...state.bagVal, action.payload];
//         },
//     },
// });

// const store = configureStore({ reducer: { bag: bagSlice.reducer } });

// export const bagAction = bagSlice.actions;
// export default store;
