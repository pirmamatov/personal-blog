import React from 'react'
import bek from "../Talks/bek.JPG"
import "./Talks.css"

 const Talks = () => {
  return (
   <>
   
   <h1>Talks</h1>
    <section className='big'>
  
      <div className="left">
        <ul>
          <li>
            <div className="takls-item-1">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
          <li>
            <div className="takls-item">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
          <li>
            <div className="takls-item">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
          <li>
            <div className="takls-item">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
          <li>
            <div className="takls-item">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
          <li>
            <div className="takls-item">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
          <li>
            <div className="takls-item">
              <img className='talks-img' src={bek} alt="" />
              <div className="talks-texts">
              <p className='talks-text'>20 march, 2022</p>
              <p className="talks-text2">Lorem ipsum dolor sit amet consectetur a</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="right">
        <h4>NEWSLETTER</h4>
        <p>Subscribe to <span>@lazyprogrammer</span> telegram channel where I share my new courses, articles, talks and more.</p>
      </div>
    </section>
   
   </>
  )
}
export  default Talks 
