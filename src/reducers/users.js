import {ALL_USERS} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ALL_USERS:
            return { allUsers: payload };

        default:
            return state;
    }
}