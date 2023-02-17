import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getPhotos = createAsyncThunk('gallery/getPhotos', async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9');
    const formattedResponse = await response.json();
    return formattedResponse;
})


const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        isLoading: false,
    },

    extraReducers: builder => {
        builder
            .addCase(getPhotos.pending, (state) => {
            state.isLoading = true

        })
        .addCase(getPhotos.fulfilled, (state, action) => {
            state.isLoading = false
            state.photos = action.payload


        })
        .addCase(getPhotos.rejected, (state) => {
            state.isLoading = false
            console.log("failed to fetch photos")

        })
    }
})

export const galleryReducer = gallerySlice.reducer
