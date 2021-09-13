import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";

import { BiMoon, BiSun } from 'react-icons/bi';

const Button = styled.button`
    background: ${({ theme }) => theme.barColor};
    border: 0px ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.background};
    cursor: pointer;
    font-size:2rem;
  }
 `;

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          { theme === 'light' ? <BiMoon /> : <BiSun /> }
        </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;