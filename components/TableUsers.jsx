import styles  from '@/styles/table.module.css';

export function TableUsers({ dataUsers }) {

    const conf = ['id', 'name', 'username', 'email', 'street', 'suite', 'city'];

    return (
        <>
            <table className={styles.userTable}>
                <thead className={styles.theadTable}>
                    <tr>
                        {conf.map(title => <td>{title}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {dataUsers.map(( /*user*/ {id, name, username, email, address: {street, suite, city}} ) => (
                        <tr key={id}>
                            {/*conf.map((key) => (
                                <td>{user[key]}</td>
                            ))*/}

                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{street}</td>
                            <td>{suite}</td>
                            <td>{city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}