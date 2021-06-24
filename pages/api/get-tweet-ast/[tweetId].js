import { fetchTweetAst } from 'static-tweets'

// export default async (req, res) => {
//   if (req.method !== 'GET') {
//     return res.status(405).send({ error: 'method not allowed' })
//   }

//   const tweetId = req.query.tweetId

//   if (!tweetId) {
//     return res
//       .status(400)
//       .send({ error: 'missing required parameter "tweetId"' })
//   }

//   console.log('getTweetAst', tweetId)
//   const tweetAst = await fetchTweetAst(tweetId)
//   console.log('tweetAst', tweetId, tweetAst)

//   res.status(200).json(tweetAst)
// }

const handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'method not allowed' })
    };
  }
  const tweetId = event.queryStringParameters.tweetId

  if (!tweetId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'missing required parameter "tweetId"' })
    };
  }

  console.log('getTweetAst', tweetId)
  const tweetAst = await fetchTweetAst(tweetId)
  console.log('tweetAst', tweetId, tweetAst)

  return {
    statusCode: 200,
    body: JSON.stringify(tweetAst)
  };
};

export { handler };
