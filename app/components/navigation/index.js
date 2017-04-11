import React from 'react';
import { Link } from 'react-router-dom'
import { header, headerNav, navLink } from './styles.css'

const NavLinks = ({isAuthed}) => {
  return isAuthed ? (
    <ul>
      <li><Link className={navLink} to="/">{'Home'}</Link></li>
    </ul>
  ) : null
}

const ActionLinks = ({isAuthed}) => {
   return isAuthed ? (
    <ul>
      <li><Link className={navLink} to="/locations">{'New Location'}</Link></li>
      <li><Link className={navLink} to="/singout">{'Sign Out'}</Link></li>
    </ul>
  ) : (
    <ul>
      <li><Link className={navLink} to="/">{'Home'}</Link></li>
      <li><Link className={navLink} to="/authenticate">{'Sign In'}</Link></li>
    </ul>
  )
}

const Navigation = ({isAuthed}) => (
  <header className={header}>
    <nav className={headerNav}>
      <NavLinks isAuthed={isAuthed} />
      <ActionLinks isAuthed={isAuthed} />
    </nav>
  </header>
)

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: React.PropTypes.bool.isRequired,
}


export default Navigation


