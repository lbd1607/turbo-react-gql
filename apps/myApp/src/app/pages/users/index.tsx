import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { usersQuery } from "./__generated__/usersQuery.graphql";

const Users = () => {
  const data = useLazyLoadQuery<usersQuery>(
    graphql`
      query usersQuery {
        users {
          id
          name
        }
      }
    `,
    {},
  );

  return (
    <div>
      {data?.users?.map((user) => (
        <ul key={user.id} className="mb-6">
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Users;
