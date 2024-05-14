import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project({img, title, description, link, git}) {
  return (
    <Link to= { link } target='blank' className="project">
      <figure>
        <img className="img project__img" src= { img } alt= {title} />
      </figure>
      <div className="project--bg">
        <div className="project__description">
          <h1 className="project__description--title">{ title }</h1>
          <h3 className="project__description--subtitle"> { description } </h3>
          <Link to= {git} target='blank' className="project__description--links">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default Project