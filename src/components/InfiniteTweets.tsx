import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
type Tweet = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  likedByme: boolean;
  user: { id: string; image: string | null; name: string | null };
};
type InfiniteTweetListProps = {
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  fetchedNewTweets: () => Promise<unknown>;
  tweets?: Tweet[];
};

function InfiniteTweetsList({
  tweets,
  isLoading,
  isError,
  hasMore,
  fetchedNewTweets,
}: InfiniteTweetListProps) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  if (tweets == null || tweets?.length === 0) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }

  return (
    <ul>
      <InfiniteScroll
        dataLength={tweets.length}
        next={fetchedNewTweets}
        hasMore={hasMore}
        loader={"Loading..."}
      >
        {tweets.map((tweet) => {
          return <div key={tweet.id}>{tweet.content}</div>;
        })}
      </InfiniteScroll>
    </ul>
  );
}

export default InfiniteTweetsList;
