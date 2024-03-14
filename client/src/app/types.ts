export interface ISearchData {
  channel: IChannelData;
}

export interface IChannelData {
  id: string;
  title: string;
  link: string;
  shortLink: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPostData {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  channelId: string;
}

export interface IPostWithChannelData extends IPostData {
  Channel: IChannelData;
}
