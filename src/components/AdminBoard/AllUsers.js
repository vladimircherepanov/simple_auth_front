import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const AllUsers = ( ) => {
    const users = useSelector((state) => state.users);
    console.log(users);
    return (<div>
        <h1>ALL USERS</h1>

    </div>)

}

export default AllUsers;