
export const getAllUsers = async (page) => {
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
        let users = await fetch(`https://reqres.in/api/users?page=${(page + 1)}`);
        payload = await users.json();
    }
    catch (err) {
        console.log("Error at Request (Next)");
        console.error(err);
    }
    console.log(page + 1);
    console.log(payload.data);
    if (payload.data == null || payload.data == [] || payload.data == {} || payload.data == [{}] || (payload.data).length == 0) {
        console.log("Going to default;")
        return { type: "GO_TO_DEFAULT" };
    }

    console.log("Request Succeeded (Next)");

    //console.log(`payload: ${payload.data[0]['id']}`);
    return {
        type: "NEXT",
        payload: payload.data
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
        console.log("Error at Request (Previous)");

        console.error(err);
    }
    console.log(payload.data);

    if (payload.data == null || payload.data == [] || payload.data == {} || payload.data == [{}]) {
        console.log("Going to default;")
        return { type: "GO_TO_DEFAULT" };
    }

    console.log(`payload: ${payload.data}`);

    console.log("Request Succeeded (Previous)");
    return {
        type: "PREVIOUS",
        payload: payload.data
    }

}
//////////////////////////////////////


