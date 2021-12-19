import React, { memo } from 'react';
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/schema";
import TodoCard from "./TodoCard";

const Todos = () => {
    const { loading, error, data } = useQuery(GET_TODOS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Sorry :(</div>

    const response = data.todos.data.map(todo => {
        return (
            <TodoCard key={ todo.id } { ...todo } />
        )
    })
    return (
        <div>
            <div>{ response }</div>
        </div>
    );
};

export default memo(Todos);