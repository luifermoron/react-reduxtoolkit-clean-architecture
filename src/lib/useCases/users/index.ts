import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/users/UserRepository";

export const getUsersUseCase = async (currentUsers: User[]): Promise<User[]> => {
  if (currentUsers.length > 0) {
    console.log("Sample: it will not retrieve users since they are already persisted");
    return currentUsers;
  }
  const userRepository = new UserRepository();
  return userRepository.getAll();
}
