import { clsx } from 'clsx';
import { Home as HomeIcon, Rss as RssIcon } from 'react-feather';
import { NavLinkProps, NavLink as RRDNavLink } from 'react-router-dom';

import classes from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={classes['sidebar']}>
      <nav>
        <ul className={classes['sidebar__list']}>
          <li>
            <NavLink aria-label='Home' to='/my'>
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink aria-label='Discover' to='/discover'>
              <RssIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function NavLink(props: NavLinkProps) {
  return (
    <RRDNavLink
      className={({ isActive }) =>
        clsx(
          classes['sidebar__list-item'],
          isActive && classes['sidebar__list-item_active'],
        )
      }
      {...props}
    />
  );
}
