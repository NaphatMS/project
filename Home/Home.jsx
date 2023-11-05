import React, { useEffect , useState } from 'react'
import './Home.css'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('token')
    console.log(token);
  
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Specify the content type if needed
      },
    };

    console.log('Headers:', config.headers);
    axios.post("http://localhost:3333/authen", {}, config)
      .then((response) => {
        console.log(response.data);
        if(response.data.status === 'ok'){
          alert('Authen successful ');
        } else {
          alert('Invalid authen');
          navigate('/Login');
      }

      })
    .catch((error) => {
      console.error("Login error:", error.response.data);
      alert("Incorrect information. Please check your credentials.");
    });
  }, []);



  return (
    <>
    <div className='Home'>
        <header>
          <nav>
            <div className="logo">
              <a>Canfly</a>
            </div>
            <ul className="navcenter">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Your order</Link></li>
              <li><Link to="/">Favorites</Link></li>
            </ul>
            <div className="in">
              <div className='sign'>
                <Link to="/Signin">SIGN IN</Link>
              </div>
              <div className='log'>
                <Link to="/Login">LOG IN</Link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="content">
            <h1>เริ่มเดินทางได้เเล้ววันนี้</h1>
            <h2>จองเที่ยวบินทั่วโลกสำหรับทริปของคุณด้วยข้อเสนอที่ดีที่สุด</h2>
          </section>

          <section className="datainput">
            <form>
              
              <input type="text" id="destination" className='inputwhere' placeholder='Choose your destination' />

              
              <input type="date" id="date" className='inputwhere' />

            </form>
            <section className="submit">
            <Link to='/Ticket'>Search</Link>
          </section>
          </section>

          
        </main>
      </div>

    
    </>
  )
}

export default Home