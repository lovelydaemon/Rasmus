import { IChannelData } from '@/app/types';
import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

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
      button: css({
        width: '90px',
        border: `1px solid ${colors.brand}`,
        borderRadius: `4px`,
        backgroundColor: 'transparent',
        color: colors.brand,
        cursor: 'pointer',
        textTransform: 'uppercase',
        padding: '4px 6px',
        fontSize: '11px',
        fontWeight: '700',
        transition: 'opacity 0.3s ease-out',
        ':hover': {
          opacity: '0.8',
        },
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
}
export default function Channel({ channel }: Props) {
  const { title, link, shortLink } = channel;
  return (
    <div css={channelCss.wrapper}>
      <div css={channelCss.header.wrapper}>
        <div css={channelCss.header.title}>{title}</div>
        <div css={channelCss.header.buttons.container}>
          <div>
            <button css={channelCss.header.buttons.button} type='button'>
              follow
            </button>
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
