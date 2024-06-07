import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'User1@gmail.com', active: true, role: 'admin'},
    {id: '2', name: 'Jane', email: 'User2@gmail.com', active: false, role: 'user'},
    {id: '3', name: 'Jake', email: 'User3@gmail.com', active: false, role: 'editor'},
  ]);

  return (
    <div>
      <header>
        <Toolbar/>
      </header>
      <main>
        <div className="row m-3 d-flex justify-content-center">
          <div className="col-3 me-5">
            <UserForm/>
          </div>
          <div className="col-3 ms-5">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
