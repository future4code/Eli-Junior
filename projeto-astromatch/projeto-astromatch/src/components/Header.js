import React from 'react';
import styled from 'styled-components';
import astromatch from '../assets/astromatch.png';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 10px 20px;
`

const Image = styled.img`
  width: 200px;
  margin: 5px 5px;
  padding-left: 10px;
`

const Header = () => {
    return (
        <HeaderPage>
          <Image src={astromatch} />
          <PeopleAltIcon sx={{ fontSize: 60, color: 'blue'}} />
        </HeaderPage>
    )
}

export default Header
