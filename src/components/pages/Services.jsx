import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const Services = () => {
  return (
    <section className='services' style={{ height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
      <div className='container' style={{ flex: 1 }}>
        <Heading title='Services' />
        <div className='content' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', flex: 1 }}>
          {services.map((item, index) => (
            <div className='box' data-aos='flip-left' key={index} style={{ padding: '1rem', textAlign: 'center' }}>
              <i>{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
