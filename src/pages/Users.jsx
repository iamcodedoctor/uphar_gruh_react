import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import MyPagination from "../components/MyPagination";
import { getUsers } from "../Services/userService";
import "../styles/Table.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const fetchUsers = async () => {
        const response = await getUsers({ page: page - 1, limit: 10 });
        setUsers(response.data);
        console.log(response.data);
    };

    const totalPages = Math.ceil(users?.documentCount / 10);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <section className="page_main_section">
            <h2 className="py-4 text-center">Users</h2>
            <Container className="table_container">
                <Table
                    className="mb-4 main_table"
                    striped
                    bordered
                    hover
                    size="sm"
                >
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.data?.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>{user.createdAt.slice(0, 10)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
            <MyPagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </section>
    );
};

export default Users;
