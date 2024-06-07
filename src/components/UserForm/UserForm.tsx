import React, {useState} from 'react';
import {User} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userMutation, setUser] = useState({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...userMutation,
      id: '',
    })
  };

  const changeBooleanValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };


  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h4>Add new Dish</h4>
        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="name">Enter your Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Your Name"
            onChange={changeUser}
            value={userMutation.name}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="email">Enter your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Your Email"
            onChange={changeUser}
            value={userMutation.email}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-check-label" htmlFor="Active">Is Active</label>
          <input className="form-check-input ms-2 p-1"
                 type="checkbox"
                 name="active"
                 id="active"
                 checked={userMutation.active}
                 onChange={changeBooleanValue}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="roleSelect" className="mb-2">Select Role:</label>
          <select className="form-control"
                  id="role" name="role"
                  value={userMutation.role}
                  onChange={changeUser}>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;