import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


import User from '../../../domain/entities/User';
import UsersState from './UsersState';
import { userCalls } from './thunks';
import { RootState } from '..';

export const usersAdapter = createEntityAdapter<User>();
const initialState: UsersState = usersAdapter.getInitialState({
    loading: false,
    error: null,
});
export const { fetchUsers } = userCalls(usersAdapter);

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    selectLoading: state => state.loading
  }
});
export const { selectLoading } = usersSlice.selectors;
export const { selectById: selectUserById, selectAll: selectAllUsers } = usersAdapter.getSelectors<RootState>(state => state.users);

export default usersSlice.reducer;