import {ALL_USERS, ALL_ROLES, DELETE_USER} from "../actions/types";

import UserService from "../services/user.service";
export const allUsers = () => (dispatch) => {
    return UserService.allUsers().then (
        (response ) => {
            console.log("res", response)
            dispatch({
                type: ALL_USERS,
                payload: response,
            })
        }
    )

}

export const allRoles = () => (dispatch) => {
    return UserService.allRoles().then (
        (response ) => {
            console.log("res", response)
            dispatch({
                type: ALL_ROLES,
                payload: response,
            })
        }
    )

}

export const deleteUser = (id) => (dispatch) => {
    return UserService.deleteUserById(id).then (
        (response ) => {
            //console.log("res", response)
            dispatch({
                type: DELETE_USER,
                payload: response,
            })
        }
    )

}

