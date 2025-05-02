    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    currentUser: null,
    loading: false,
    error: null
    };

    const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
        },
        setLoading: (state) => {
        state.loading = true;
        state.error = null;
        },
        setError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        },
        logoutUser: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
        }
    }
    });

    export const { setUser, setLoading, setError, logoutUser } = userSlice.actions;
    export default userSlice.reducer;