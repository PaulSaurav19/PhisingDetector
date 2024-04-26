import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './featured.scss';

const Featured = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [result, setResult] = useState('');
  
  const handleSearch = () => {
    if(search) {
      setResult('This is a phishing website.');
    }
  }

  return (
    <div className='featured'>
      <div className="container">

        <div className="left">
          <h1>Your trusted <span>phishing</span> detection platform</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./media/search.png" alt="search" />
              <input type="search" placeholder='Enter the URL' onChange={(({ target: { value } }) => setSearch(value))} />
            </div>
            <button onClick={handleSearch}>Detect</button>
          </div>
          <div className="popular">
          {/* {result !== '' && <p> This is a phising website</p>} */}
          </div>
        </div>

        <div className="right">
          <img src="./media/security2.jpg" alt="hero" />
        </div>
        
      </div>
    </div>
  )
}

export default Featured