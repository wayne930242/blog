import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => {
  const body = await generateOgImage(params.ogTitle);

  // Create a Response object
  return new Response(JSON.stringify({ body }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200, // or appropriate HTTP status code
  });
};

const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.heroImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}
