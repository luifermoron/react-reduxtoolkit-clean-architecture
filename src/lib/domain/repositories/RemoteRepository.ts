import { getCall } from "../../drivers/network/common";
import { GET_USERS } from "../../drivers/network/common/endpoints";
import IRepository from "./IRepository";

export default abstract class RemoteRepository<Entity> implements IRepository<Entity> {
    async getAll(): Promise<Entity[]> {
        console.log("Making the call to: " + GET_USERS);
        return getCall<Entity[]>(GET_USERS);
    }

    abstract test(): void;
}