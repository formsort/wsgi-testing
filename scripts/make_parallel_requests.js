const fetch = require('node-fetch');

USAGE = `
node ${__filename} [url] [parallel requests]
`

const time = () => {
  return new Date();
}


const fetchUrl = async (url, id) => {
  let res;
  console.log(`[req ${id}: ${time()}] start`);
  try {
    res = await fetch(url);
  } catch (e) {
    console.log(`[req ${id}: ${time()}] error in fetch ${e.toString()}`);
  }

  console.log(`[req ${id}: ${time()}] done`);

  let text;
  try {
    text = await res.text();
  } catch (e) {
    console.log(`[req ${id}: ${time()}] error in .text() ${e.toString()}`);
  }

}


const init = async () => {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log(USAGE);
    process.exit(1);
  }

  const [
    url,
    numParallelRequests
  ] = args;


  const requestPromises = [];
  for (let i = 0; i < numParallelRequests; i++) {
    requestPromises.push(fetchUrl(url, i));
  }

  await Promise.all(requestPromises);
  console.log('All done!');
}


init();