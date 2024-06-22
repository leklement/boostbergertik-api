import { IFeed, IFeedItem } from "@typesDef/feed";

export class TikApiServices {
  constructor() {}

  async getFeeds(): Promise<IFeed | undefined> {
    try {
      const response = await fetch(
        "https://api.tikapi.io/user/feed?count=20&cursor=0",
        {
          headers: {
            "X-API-KEY": "8bn06zR6MRVCiYSdEJJIro07UnMeCkLr6Rpl3BXdkt0bg3Ph",
            "X-ACCOUNT-KEY": "7cj1DdRxayoKXx54OCtMC3IpOpCSN42iC92XeFEWRfwFmW6p",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      //   Extract stats from each item in the itemList
      const itemList: IFeedItem[] = data.itemList.map((item: IFeedItem) => {
        return { id: item.id, stats: item.stats };
      });

      return { itemList: itemList };
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
