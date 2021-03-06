import React, {useState} from 'react';

const Main = () => {
    const [imgUrl, setUrl] = useState('');
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        username:''
    })
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [username, setUsername] = useState('');

    // * axios.post('/auth/login', userInfo)
    return <div className="main">
        This is the Main component
        <input
            value={userInfo.username}
            onChange={e => setUserInfo({...userInfo, username: e.target.value})}
        />
    
        <h1>{userInfo.username}</h1>
    </div>
}

export default Main;