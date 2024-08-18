import User from "../../entities/User";
import RemoteRepository from "../RemoteRepository";

export default class UserRepository extends RemoteRepository<User> {
    test() {
        console.log("This is just a sample that Repository can be extensible and implement its own methods");
    }
}