import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { showInfo } from '../../redux/reducers/postReducer'
import { request } from '../../api'

export const UserList = () => {
  const [list, setListItems] = useState([]);

  useEffect(() => {
    request().then(setListItems)
  }, [])

  const dispatch = useDispatch()

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr>
            <td>{ item.id }</td>
            <td>{ item.name }</td>
            <td>{ item.email }</td>
            <td>{ item.phone }</td>
            <td>
              <button
                className="button is-primary"
                onClick={() => {
                  dispatch(showInfo(item))
                }}
              >
                Post
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}