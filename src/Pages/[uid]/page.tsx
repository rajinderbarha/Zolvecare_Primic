import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());
  if (!params) {
    // Handle case when page data is not available
    return <div>Loading...</div>;
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", {
    // Adjust predicates as needed
  });

  const paths = pages.map((page) => ({
    params: { uid: page.uid },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID("page", params.uid).catch(() => null);

  return {
    props: {
      page: page || null,
    },
  };
}
