import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    places: []
}

const placesSlicer = createSlice({
    name: 'placesSlicer',
    initialState,
    reducers: {
        setPlaces: (state, action) => {
            state.places = action.payload
        }
    }
})

export const { setPlaces } = placesSlicer.actions
export default placesSlicer.reducer