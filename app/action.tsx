"use server";

import ComicsCard, { ComicsProp } from "@/components/ComicsCard/ComicsCard";
 
const apiBaseURL = "https://gateway.marvel.com/v1/public";

function createURL(page: number) { 

  const params = new URLSearchParams({
    ts: process.env.MARVEL_TS!,
    apikey: process.env.MARVEL_PUBLIC_KEY!,
    hash: process.env.MARVEL_HASH!,
    limit: '8',
    offset: `${page > 1 ? (page - 1) * 8 : 0}`,
  });

  const endpoint = `${apiBaseURL}/comics?`;

  const url = endpoint + params;

  return url;
}

export const fetchComics = async (page: number) => {
  const url = createURL(page);

  const responseMarvel = await fetch(url); 

  const dataMarvel = await responseMarvel.json().then(data => data.data.results); 

  return dataMarvel.map((item: any, index: any) => (
    <ComicsCard key={item.id} comics={item} index={index} />
  ));
};
