export const fetchHaiku = async (id: number) => {
  const haikuQuery = `*[_type == 'haiku' && id==${id}]{id, haiku}`;
  const sanityUrl = `https://7rtdaclt.api.sanity.io/v1/data/query/haikus?query=${encodeURIComponent(haikuQuery)}`
  const res = await fetch(sanityUrl)

  const data = await res.json();
  return data.result[0];
}