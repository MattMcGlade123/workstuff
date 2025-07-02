'use client'

import React, { FC } from 'react';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  StyledHeader,
  StyledNav
} from './HeaderStyles';
import Link from 'next/link';

interface HeaderStructureProps {
  isLoggedIn: boolean
  logout: () => void
}

const HeaderStructure: FC<HeaderStructureProps> = ({ isLoggedIn, logout }) => {
  return (
    <StyledHeader data-testid="header">
      <Link href={'/'}><h1>Awesome product site<FontAwesomeIcon icon={faShop} /></h1></Link>
      <StyledNav>
        <ul>
          <li>{!isLoggedIn ? (<Link href="/login">Login</Link>) : (<span onClick={() => logout()}>Logout</span>)}</li>
          <li><Link href="/register">Register</Link></li>
          <li><Link href="/addProduct">Add a product</Link></li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default HeaderStructure;
