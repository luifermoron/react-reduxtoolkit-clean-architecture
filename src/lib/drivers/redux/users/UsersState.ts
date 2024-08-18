import { EntityState } from '@reduxjs/toolkit';
import User from '../../../domain/entities/User';

export default interface UsersState extends EntityState<User, number> {
    loading: boolean;
    error: string | null | undefined;
}