import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import status from "./status";
const store = configureStore({
    reducer: {
        [status.name]: status.reducer,
    },
    middleware: [thunk]
});
export default store;
