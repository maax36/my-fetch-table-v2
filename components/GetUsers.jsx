import { useEffect } from "react";

export function GetUsers({setUsers, setError}) {

    useEffect(() => {
        async function get() {
            try {
                const
                    res = await fetch('https://jsonplaceholder.typicode.com/users'),
                    users = await res.json();
                    setUsers(users);
            } catch (err) {
                setError(err);
            }
        }

        get();
    }, []);

    return null;
}