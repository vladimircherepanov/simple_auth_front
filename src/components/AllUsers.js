import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {allUsers} from "../actions/users";

const AllUsers = ( ) => {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const roles = useSelector((state => state.roles));

    //alert(JSON.stringify(users, null, 2)

    console.log("roles", users.roles.data);
    console.log("users", users);


    const usersList = () => {
        if(users.users.data) {
            return (
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <td>E-mail</td>
                            <td>Roles</td>
                            <td>ID</td>
                        </tr>
                        </thead>

                        {users.users.data.map((elem, key) => {
                            return (<tbody key={elem.id}>
                        <tr>
                            <td>{elem.email}</td>
                            <td>{elem.roles.map((role, index) => <li key={index}>{
                                role
                            }</li>)}</td>
                            <td>{elem._id}</td>
                            <td><a href="">Delete</a></td>
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