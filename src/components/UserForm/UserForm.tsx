const UserForm = () => {
  return (
    <div>
      <form>
        <h4>Add new Dish</h4>
        <div className="form-group mb-3">
          <label className='mb-2' htmlFor="name">Enter your Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Your Name"
          />
        </div>
        <div className='form-group mb-3'>
          <label className='mb-2' htmlFor="email">Enter your Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className='form-group mb-3'>
        <label className='form-check-label' htmlFor="isActive">Is Active</label>
          <input className='form-check-input ms-2 p-1'
            type="checkbox"
            name="isActive"
            id="isActive"
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor="roleSelect" className='mb-2'>Select Role:</label>
          <select className='form-control' id="roleSelect" name="role">
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;