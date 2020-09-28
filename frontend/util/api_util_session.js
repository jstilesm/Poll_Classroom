export const signup = user => (
    $.ajax({
        url: 'api/users',
        method: "POST",
        data: {user}
    })
);

export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user}
    })
);

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: "DELETE"
    })
);

export const updateUser = user => (
    $.ajax({
        url: '/api/session',
        method: "PATCH",
        data: {user}

    })
);

// check user Ajax request that meets back end

export const checkUser = (identifier) => (
    $.ajax({
        url: '/api/users/exists',
        method: "GET",
        data: {identifier}
    })
);