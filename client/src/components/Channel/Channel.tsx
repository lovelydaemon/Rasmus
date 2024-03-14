import { IChannelData } from '@/app/types';
import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import FollowButton from '../FollowButton/FollowButton';

const channelCss = {
  wrapper: css({
    border: `1px solid ${colors.gray}`,
    borderRadius: '4px',
    padding: '16px',
  }),
  header: {
    wrapper: css({
      display: 'flex',
    }),
    title: css({
      fontWeight: '700',
      flex: '1',
    }),
    buttons: {
      container: css({
        display: 'flex',
        flex: '1',
        flexDirection: 'row-reverse',
      }),
    },
  },
  authorLink: css({
    fontSize: '13px',
    lineHeight: '18px',
    ':link, :visited': {
      color: colors.lightGray,
    },
    ':hover,:active': {
      color: colors.white,
      textDecoration: 'underline',
    },
  }),
};
interface Props {
  channel: IChannelData;
  onToggleFollow: (channelId: string) => void;
}
export default function Channel({ channel, onToggleFollow }: Props) {
  const { title, link, shortLink, following } = channel;

  return (
    <div css={channelCss.wrapper}>
      <div css={channelCss.header.wrapper}>
        <div css={channelCss.header.title}>{title}</div>
        <div css={channelCss.header.buttons.container}>
          <div>
            <FollowButton
              following={following}
              onToggleFollow={() => onToggleFollow(channel.id)}
            />
          </div>
        </div>
      </div>

      <a
        target='_blank'
        rel='noopener noreferrer'
        css={channelCss.authorLink}
        href={link}
      >
        {shortLink}
      </a>
    </div>
  );
}
