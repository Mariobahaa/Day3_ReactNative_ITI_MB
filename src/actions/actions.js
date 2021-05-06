
export const getAllUsers = async () => {
    let payload = null;
    try {
        let users = await fetch(`https://reqres.in/api/users?page=1`);
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

export const createUser = async (name, job) => {
    let payload = null;
    try {
        let user = await fetch(`https://reqres.in/api/users/`, {
            method: 'POST',
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, job })
        });
        payload = await user.json();
    }
    catch (err) {
        console.error(err);
    }

    return {
        type: "CREATE_USER",
        payload: payload.data
    }
}

//////////////////////////////////////

export const Next = async (page) => {
    let payload = null;
    try {
        let users = await fetch(`https://reqres.in/api/users?page=${page + 1}`);
        payload = await users.json();
    }
    catch (err) {
        console.error(err);
    }

    if (payload == null || payload == [] || payload == {}) {
        return { type: "GO_TO_DEFAULT" };
    }

    return {
        type: "NEXT",
        payload: null
    }

}
//////////////////////////////////////


//////////////////////////////////////

export const Previous = async (page) => {
    let payload = null;
    try {
        if (page == 1) throw Error("First Page");
        let users = await fetch(`https://reqres.in/api/users?page=${page - 1}`);
        payload = await users.json();
    }
    catch (err) {
        console.error(err);
    }

    if (payload == null || payload == [] || payload == {}) {
        return { type: "GO_TO_DEFAULT" };
    }


    return {
        type: "PREVIOUS",
        payload: null
    }

}
//////////////////////////////////////


