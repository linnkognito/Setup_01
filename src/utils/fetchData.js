async function fetchData(url) {
  try {
    const res = await fetch(url);

    if (!res.ok)
      throw new Error(`HTTP ${res.status}: Failed to fetch data from ${url}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Fetch error at ${url}`, err.message);
    throw err;
  }
}

export default fetchData;
