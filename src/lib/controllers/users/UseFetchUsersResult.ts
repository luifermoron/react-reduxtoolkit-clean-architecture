import User from "../../domain/entities/User";

export type UseFetchUsersResult = {
    users: User[]; 
    loading: boolean;
}