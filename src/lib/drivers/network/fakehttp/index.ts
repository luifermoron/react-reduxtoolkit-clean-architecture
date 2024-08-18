import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import User from "../../../domain/entities/User";
import { GET_USERS } from "../common/endpoints";

const mock = new MockAdapter(axios);

export const setupFakeHTTP =
    () => {
        mock.onGet(GET_USERS).reply<User[]>(200, [
            { id: 1, name: 'Alice Johnson' },
            { id: 2, name: 'Bob Smith' },
            { id: 3, name: 'Carol Davis' },
            { id: 4, name: 'David Martinez' },
            { id: 5, name: 'Eve Roberts' },
            { id: 6, name: 'Frank Thompson' },
            { id: 7, name: 'Grace Lee' },
            { id: 8, name: 'Henry Brown' },
            { id: 9, name: 'Ivy Wilson' },
            { id: 10, name: 'Jack White' }
        ]);
};
