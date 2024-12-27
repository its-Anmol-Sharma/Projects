import React from 'react';
import styled from 'styled-components';
import "../../vars.css";


const Demo= () => {
  return (
    <StyledWrapper>
       <button className="btn-github">
       <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 24 24">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="M6 8h.01M9 8h.01M12 8h.01M4 11h16M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
       </svg>
        <span style={{ textDecoration: 'none' }}>Demo</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-github {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    border: none;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 100px;
    font-weight: 800;
    place-content: center;
    padding: 0.75rem 1rem;
    font-size: 0.825rem;
    line-height: 1rem;
    font-family: "Playwrite Australia Victoria Guides";
    background-color: var(--color-primary);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.04),
      inset 0 0 0 1px rgba(255, 255, 255, 0.04);
    color: #fff;
  }
    .btn-github span {
    text-decoration: none !important;
    border: none !important; 
  outline: none !important; 
  }

  .btn-github:hover {
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
      inset 0 0 0 1px rgba(252, 232, 3, 0.08);
    color: #fce803;
    transform: translate(0, -0.25rem);
    background-color: rgba(0, 0, 0, 0.5);
  }
  `;

export default Demo;
