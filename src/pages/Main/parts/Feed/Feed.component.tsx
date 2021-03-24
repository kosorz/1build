import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { DateTime } from "luxon";

import Loader from "../../../../parts/Loader/Loader.component";

import S from "./Feed.styles";

type Post = {
  author: string;
  posted: number;
  title: string;
};

const perPage = 2;

const FeedItem = ({ p, i, cursor }: { p: Post; i: number; cursor: number }) => (
  <S.FeedItem>
    <S.FeedItemDecor>
      <S.FeedItemIterator>
        {(cursor - 1) * perPage + (i + 1)}
      </S.FeedItemIterator>
    </S.FeedItemDecor>
    <S.FeedItemContent>
      <S.FeedItemTitle>{p.title}</S.FeedItemTitle>
      <S.FeedItemMeta>{DateTime.fromMillis(p.posted * 1000).toRelative()} • {p.author}</S.FeedItemMeta>
    </S.FeedItemContent>
  </S.FeedItem>
);

const Feed = () => {
  const [cursor, setCursor] = useState(1);

  const { data: response, isFetching, refetch } = useQuery(["feed"], () => {
    return axios.get(
      `https://agt9hdkay8.execute-api.us-east-2.amazonaws.com/default/1build-feed-paginated?page=${cursor}&perPage=${perPage}`
    );
  });

  useEffect(() => {
    refetch();
  }, [cursor, refetch]);

  const onNext = () => {
    setCursor(cursor + 1);
  };

  const onPrevious = () => {
    setCursor(cursor - 1);
  };

  return (
    <S.Wrapper>
      <S.Motto>
        Building is about getting around the obstacles that are presented to
        you.
      </S.Motto>
      <S.Encouragement>
        Learn more <S.Arrow />
      </S.Encouragement>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {response?.data.posts.map((p: Post, i: number) => (
            <FeedItem key={p.posted + p.title} i={i} p={p} cursor={cursor} />
          ))}
          {response?.data.pages > 1 && (
            <S.Pagination aria-label="Cursor pagination">
              <S.Pagination.Previous
                onClick={onPrevious}
                disabled={cursor === 1}
              >
                Previous
              </S.Pagination.Previous>
              <S.Pagination.Next
                onClick={onNext}
                disabled={cursor === response?.data.pages}
              >
                Next
              </S.Pagination.Next>
            </S.Pagination>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export default Feed;
