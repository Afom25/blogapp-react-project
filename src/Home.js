import {useState} from 'react';

const Home = () => {

    // let name ='mario';
    const [name, setName] =useState('mario');
    const[age , setAge] = useState(25)

    const handleClick = () => {
       setName('hidri');
       setAge(34);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <h4>{name} is  {age} old </h4>
            <button onClick={handleClick}>Click me</button>
        </div>
    )

}

export default Home;