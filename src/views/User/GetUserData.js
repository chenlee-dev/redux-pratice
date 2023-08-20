import { useNavigate } from 'react-router-dom';

function GetUserData(userId) {
  const navigate = useNavigate();
  navigate(`/user/${userId}`);
}

export default GetUserData;