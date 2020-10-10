export default async ({ store }) => {
  await store.dispatch("posts/getPosts");
};
