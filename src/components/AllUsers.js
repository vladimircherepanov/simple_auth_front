import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {allUsers, deleteUser} from "../actions/users";

const AllUsers = ( ) => {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    //alert(JSON.stringify(users, null, 2)

    console.log("roles", users.roles.data);
    console.log("users", users);

    const roleFunc = (role) => {
        const x = users.roles.data.find( ({_id }) => _id === role ).name;
        return x;
    }

    const usersList = () => {
        const deleteUs = (e, elem) => {
            console.log(elem._id);
            dispatch(deleteUser(elem._id));
        }
        if(users.users.data) {
            return (
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <td>E-mail</td>
                            <td>Roles</td>
                            <td>Confirmed</td>

                            <td>ID</td>
                        </tr>
                        </thead>

                        {users.users.data.map((elem, key) => {
                            const x = users.roles.data;
                            return (<tbody key={elem.id}>
                        <tr>
                            <td>{elem.email}</td>
                            <td>{elem.roles.map((role, index) => <li key={index}>{
                                roleFunc(role)
                            }</li>)}</td>
                            <td>{elem.confirmed}</td>
                            <td>{elem._id}</td>
                            <td><a href={""} value = {elem._id} onClick={(e)=>deleteUs(e, elem)}>Delete</a></td>
                        </tr>

                        </tbody>
                            )})}
                    </table>
                </div>

            )
        } else {

        }
    }

    return (<div>
        <div>{usersList()}</div>
    </div>)

}

export default AllUsers;