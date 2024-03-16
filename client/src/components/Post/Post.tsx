import { useState } from 'react';

import { IPostData } from '@/app/types';

import classes from './Post.module.scss';
import Toolbar from './Toolbar';

interface Props {
  author: string;
  authorLink: string;
  post: IPostData;
}

export default function Post({ post, author, authorLink }: Props) {
  const [showToolbar, setShowToolbar] = useState(false);

  const { title, description, link, date } = post;
  return (
    <article
      className={classes['post']}
      onMouseEnter={() => setShowToolbar(true)}
      onMouseLeave={() => setShowToolbar(false)}
    >
      <div className={classes['post__content']}>
        <div className={classes['post__header']}>
          <a
            className={classes['post__title']}
            href={link}
            rel='noopener noreferrer'
            target='_blank'
          >
            {title}
          </a>
        </div>

        {showToolbar && <Toolbar />}

        <div className={classes['post__info']}>
          <a
            className={classes['post__link']}
            href={authorLink}
            rel='noopener noreferrer'
            target='_blank'
          >
            {author}
          </a>{' '}
          / <span>{date}</span>
        </div>

        <div className={classes['post__description']}>{description}</div>
      </div>
    </article>
  );
}
