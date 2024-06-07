import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className='card mb-3 p-2'>
      <div className='row no-gutters'>
          <div className='col-sm-8'>
            <h5 className='card-title'>{user.name}</h5>
            <p className='card-text'>Email: {user.email}:</p>
            <p className='card-text'>Is Active: {user.active ? 'Yes' : 'No'}</p>
            <p className='card-text'>Role: {user.role}</p>
          </div>
        </div>
      </div>
  );
};

export default UserItem;