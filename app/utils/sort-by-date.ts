import { Post } from "../models/post";

export const sortByDate = (array: Post[]) => {
  const sortedArray: Post[] = array.sort(
    (a: Post, b: Post): number =>
      new Date(b?.date as string).valueOf() -
      new Date(a?.date as string).valueOf(),
  );
  return sortedArray;
};
