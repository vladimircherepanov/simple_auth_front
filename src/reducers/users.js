import {ALL_USERS, ALL_ROLES} from "../actions/types";
import UserService from "../services/user.service";
const initialState = {
    users: [],
    roles: []
};

export default function (state = initialState, action) {
        const {type, payload} = action;
        switch (type) {
            case ALL_USERS:
                return {
                    ...state,
                    users: payload
                };

            case ALL_ROLES:
                return {
                    ...state,
                    roles: payload
                };
            default:
                return state;

        }
}