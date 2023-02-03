import React from "react";
import { Pagination } from "react-bootstrap";

const MyPagination = ({ page, setPage, totalPages }) => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={i === page}
                onClick={() => setPage(i)}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Pagination size="sm">
                <Pagination.Prev
                    disabled={page < 2 ? true : false}
                    onClick={() => setPage(page - 1)}
                />
                {items}
                <Pagination.Next
                    disabled={page < totalPages ? false : true}
                    onClick={() => setPage(page + 1)}
                />
            </Pagination>
        </div>
    );
};

export default MyPagination;
