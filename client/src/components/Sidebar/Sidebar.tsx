import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import { Home as HomeIcon, Rss as RssIcon } from 'react-feather';
import { NavLinkProps, NavLink as RRDNavLink } from 'react-router-dom';

const sidebarCss = {
  wrapper: css({
    position: 'fixed',
    zIndex: '10',
    top: '0',
    left: '0',
    width: '64px',
    borderRight: `1px solid ${colors.darkGray}`,
    height: '100%',
    padding: '16px 0',
  }),
  navLink: css({
    display: 'block',
    padding: '8px',
    transition: 'color 0.3s ease-out',
    ':link, :visited': {
      color: colors.lightGray,
    },
    ':hover, :active': {
      color: colors.white,
    },
  }),
  ul: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),
};

export default function Sidebar() {
  return (
    <div css={sidebarCss.wrapper}>
      <nav>
        <ul css={sidebarCss.ul}>
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
      css={sidebarCss.navLink}
      style={({ isActive }) => (isActive ? { color: colors.brand } : undefined)}
      {...props}
    />
  );
}
