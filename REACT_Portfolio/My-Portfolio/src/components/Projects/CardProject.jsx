import React from 'react';
import styled from './ProjectCard.module.css';

const Card = () => {
  return (
    <StyledWrapper>
      <article className="card">
        <div className="card-int">
          <span className="card__span">Category</span>
          <div className="img" />
          <div className="card-data">
            <p className="title">This is a test title
            </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="button">More info</button>
          </div>
        </div>
      </article>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div;

export default Card;
