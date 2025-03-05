import React from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_Data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Experience = () => {
  return (
    <div>
        <div className="services"></div>
        <div className="services-title">
            <h1>Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index) => {
                return <div key={index}className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Lire plus</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                })}
        </div>
    </div>
  )
}

export default Experience