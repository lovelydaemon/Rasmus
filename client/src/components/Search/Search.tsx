import { clsx } from 'clsx';
import { SyntheticEvent, useState } from 'react';
import { X as XIcon, Search as SearchIcon } from 'react-feather';

import classes from './Search.module.scss';

interface Props {
  onSubmit: ({ url }: { url: string }) => void;
}

export default function Search({ onSubmit }: Props) {
  const [search, setSearch] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  const [focused, setFocused] = useState(false);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    onSubmit({ url: search });
  }

  return (
    <form
      className={clsx(
        classes['search-form'],
        mouseOver && classes['search-form_hovered'],
        focused && classes['search-form_focused'],
      )}
      onSubmit={handleSubmit}
    >
      <div className={classes['search-form__search-icon']}>
        <SearchIcon size={20} />
      </div>
      <input
        className={classes['search-form__input']}
        placeholder='Search by RSS link'
        type='text'
        value={search}
        autoFocus
        onBlur={() => setFocused(false)}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setFocused(true)}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      />
      {search && (
        <button
          aria-label='Clear search'
          className={classes['search-form__clear-button']}
          type='button'
          onClick={() => setSearch('')}
        >
          <XIcon size={20} />
        </button>
      )}
    </form>
  );
}
