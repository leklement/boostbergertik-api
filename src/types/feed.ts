export interface IFeed {
  itemList: IFeedItem[];
}

export interface IFeedItem {
  id: string;
  stats: IFeedItemStats;
}

interface IFeedItemStats {
  collectCount: number;
  commentCount: number;
  diggCount: number;
  playCount: number;
  shareCount: number;
}
