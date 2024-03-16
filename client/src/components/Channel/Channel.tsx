import { IChannelData } from '@/app/types';

import FollowButton from '../FollowButton/FollowButton';

import classes from './Channel.module.scss';

interface Props {
  channel: IChannelData;
  onToggleFollow: (channelId: string) => void;
}
export default function Channel({ channel, onToggleFollow }: Props) {
  const { title, link, shortLink, following } = channel;

  return (
    <div className={classes['channel']}>
      <div className={classes['header']}>
        <div className={classes['header__title']}>{title}</div>
        <div className={classes['header__buttons']}>
          <div>
            <FollowButton
              isFollowing={following}
              onToggleFollow={() => onToggleFollow(channel.id)}
            />
          </div>
        </div>
      </div>

      <a
        className={classes['channel__link']}
        href={link}
        rel='noopener noreferrer'
        target='_blank'
      >
        {shortLink}
      </a>
    </div>
  );
}
