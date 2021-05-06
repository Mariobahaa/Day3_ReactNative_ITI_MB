
export const getAllUsers = async (page = 1) => {
    //console.log("getall");
    let payload = null;
    try {
        let users = await fetch(`https://reqres.in/api/users?page=${page}`);
        payload = await users.json();
    }
    catch (err) {
        console.error(err);
    }


    return {
        type: "USERS",
        payload: payload.data
    }
}

export const getUserDetails = async (id) => {
    let payload = null;
    try {
        let user = await fetch(`https://reqres.in/api/users/${id}`);
        payload = await user.json();
    }
    catch (err) {
        console.error(err);
    }

    return {
        type: "USER_DETAILS",
        payload: payload.data
    }
}

// export const postUser = async (id) => {

// }