import React from "react";
import {Container, Table} from "react-bootstrap";
import "../styles/Table.css";

const Users = () => {
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
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>James Gordan</td>
                        <td>Admin</td>
                        <td>2021-04-12</td>
                    </tr>
                    {/* This is a seperator */}
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>James Gordan</td>
                        <td>Admin</td>
                        <td>2021-04-12</td>
                    </tr>
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>James Gordan</td>
                        <td>Admin</td>
                        <td>2021-04-12</td>
                    </tr>
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>James Gordan</td>
                        <td>Admin</td>
                        <td>2021-04-12</td>
                    </tr>
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>James Gordan</td>
                        <td>Admin</td>
                        <td>2021-04-12</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default Users;
