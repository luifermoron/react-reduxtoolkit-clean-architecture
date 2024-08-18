
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../drivers/redux';
import { fetchUsers, selectAllUsers, selectLoading } from '../../drivers/redux/users';
import { UseFetchUsersResult } from './UseFetchUsersResult';

export const useFetchUsers = (): UseFetchUsersResult => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const loading = useAppSelector(selectLoading);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return { users, loading };
};