export interface ISearchData {
  channel: IChannelData;
}

export interface IChannelData {
  createdAt: string;
  following: boolean;
  id: string;
  link: string;
  shortLink: string;
  title: string;
  updatedAt: string;
}

export interface IPostData {
  channelId: string;
  createdAt: string;
  date: string;
  description: string;
  id: string;
  link: string;
  title: string;
  updatedAt: string;
}

export interface IChannelWithPostsData extends IPostData {
  posts: IPostData[];
}
