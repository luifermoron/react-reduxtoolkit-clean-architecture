import { createAsyncThunk, EntityAdapter } from '@reduxjs/toolkit';
import User from '../../../domain/entities/User';
import { RootState } from '..';
import { getUsersUseCase } from '../../../useCases/users';

export const userCalls = (usersAdapter: EntityAdapter<User, number>) => {
  const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { getState }) => {
    const state = getState() as RootState;
    return getUsersUseCase(usersAdapter.getSelectors().selectAll(state.users));
  }, {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      if (state.users.loading) {
        return false;
      }
    }
  });

  return { fetchUsers };
}


