import React, { useState, useEffect } from "react";
import axios from "axios";

// EXAMPLE OF A USERS TABLE BEING FETCHED!

const FetchContainer = () => {
  const [users, setUsers] = useState([]);

  const userData = async () => {
    // FETCH
    // await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // AXIOS
    let users = await axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        // id, name, username, email, company.name;

        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    userData();
  }, []);

  // Fetching data and putting it in a table (statically)

  return (
    <div>
      <table className="fetch-table">
        <thead>
          <tr>
            <th>Test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company Name</th>
          </tr>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <a href={user.website}>{user.website}</a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchContainer;
