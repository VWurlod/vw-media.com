import React, { Component } from 'react'
import { AiFillCamera } from "react-icons/ai";
import { CgSwiss } from "react-icons/cg";
import { GiHummingbird, GiSwamp } from "react-icons/gi";
import Title from './Title';

export default class About extends Component { 

  state = {
    services: [
      {
        icon:<AiFillCamera/>,
        title: "Photography",
        info: "Originally from Switzerland, I started to seriously explore photography after moving to Louisiana in 2016."
      },
      {
        icon:<CgSwiss/>,
        title: "Switzerland",
        info: "I'm originally from Lausanne, Switzerland and currently living in Louisiana."
      },
      {
        icon:<GiSwamp />,
        title: "Louisiana",
        info: "Currently focusing my photography in south Louisiana wildlife."
      },
      {
        icon:<GiHummingbird/>,
        title: "Wildlife",
        info: "If you'd like to see more checkout my instagram and don't forget to follow me for the latest!"
      },
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
              );
          })}
        </div>
      </section>
    )
  }

}