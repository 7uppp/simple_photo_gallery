import {configureStore,createAsyncThunk} from "@reduxjs/toolkit";
import {galleryReducer} from "./gallertSlice";




const store=configureStore({
    reducer:{
        gallery:galleryReducer,

    }
})


export default store