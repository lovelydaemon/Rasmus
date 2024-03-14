import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import { SyntheticEvent, useState } from 'react';
import { X as CloseIcon, Search as SearchIcon } from 'react-feather';

const searchCss = {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `1px solid ${colors.gray}`,
    borderRadius: '4px',
    transition: 'border-color 0.2s ease-out',
  }),
  searchIcon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    color: colors.lightGray,
  }),
  input: css({
    width: '100%',
    fontSize: '16px',
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.white,
    padding: '8px 0',
    ':focus': {
      outline: 'none',
    },
  }),
  button: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.lightGray,
    transition: 'color 0.3s ease-out',
    ':hover': {
      color: colors.white,
    },
  }),
};

interface Props {
  onSubmit: ({ url }: { url: string }) => void;
}

const size = 20;

export default function Search({ onSubmit }: Props) {
  const [search, setSearch] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  const [focused, setFocused] = useState(false);

  const formStyle = focused
    ? { borderColor: colors.brand }
    : mouseOver
      ? { borderColor: colors.lightGray }
      : undefined;

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    onSubmit({ url: search });
  }

  return (
    <form onSubmit={handleSubmit} css={searchCss.wrapper} style={formStyle}>
      <div css={searchCss.searchIcon}>
        <SearchIcon size={size} />
      </div>
      <input
        css={searchCss.input}
        type='text'
        placeholder='Search by RSS link'
        autoFocus
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search && (
        <button
          css={searchCss.button}
          type='button'
          aria-label='Clear search'
          onClick={() => setSearch('')}
        >
          <CloseIcon size={size} />
        </button>
      )}
    </form>
  );
}
