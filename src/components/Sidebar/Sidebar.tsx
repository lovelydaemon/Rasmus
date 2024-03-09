import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import { Aperture as ApertureIcon, Rss as RssIcon } from 'react-feather';
import { NavLink } from 'react-router-dom';

const navLinkCss = css({
  display: 'block',
  padding: '8px',
  transition: 'color 0.3s ease-out',
  ':link, :visited': {
    color: colors.lightGray,
  },
  ':hover, :active': {
    color: colors.white,
  },
});

const sidebarCss = css({
  position: 'fixed',
  zIndex: 10,
  top: 0,
  left: 0,
  width: '64px',
  borderRight: `1px solid ${colors.darkGray}`,
  height: '100%',
  padding: '16px 0',
});

const ulCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export default function Sidebar() {
  return (
    <div css={sidebarCss}>
      <nav>
        <ul css={ulCss}>
          <li>
            <NavLink css={navLinkCss} aria-label='Home' to='/my'>
              <ApertureIcon />
            </NavLink>
          </li>
          <li>
            <NavLink css={navLinkCss} aria-label='Discover' to='/discover'>
              <RssIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
