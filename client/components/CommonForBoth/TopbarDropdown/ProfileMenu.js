import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { signOut } from 'next-auth/client';
import { useSession } from 'next-auth/client';
//i18n
//import { withTranslation } from "react-i18next"
// Redux
//import { connect } from "react-redux"
//import { withRouter, a } from "react-router-dom"

// users
import user1 from '../../../../assets/images/users/avatar-1.jpg';

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [session, loading] = useSession();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={session?.user?.image}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1">{session?.user.name}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            <i className="bx bx-user font-size-16 align-middle me-1" />
            Profile
          </DropdownItem>
          <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1" />
            My Wallet
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            Settings
          </DropdownItem>
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            Lock screen
          </DropdownItem>
          <div className="dropdown-divider" />
          <a to="#" className="dropdown-item" onClick={() => signOut({ callbackUrl: '/' })}>
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>Logout</span>
          </a>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ProfileMenu;
