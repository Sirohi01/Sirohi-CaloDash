    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    currentUser: null
    };

    const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
        state.currentUser = action.payload;
        // Save to localStorage too
        const reduxState = JSON.parse(localStorage.getItem('reduxState')) || {};
        reduxState.user = { currentUser: action.payload };
        localStorage.setItem('reduxState', JSON.stringify(reduxState));
        },
        logoutUser(state) {
        state.currentUser = null;
        const reduxState = JSON.parse(localStorage.getItem('reduxState')) || {};
        reduxState.user = { currentUser: null };
        localStorage.setItem('reduxState', JSON.stringify(reduxState));
        }
    }
    });

    export const { setUser, logoutUser } = userSlice.actions;
    export default userSlice.reducer;