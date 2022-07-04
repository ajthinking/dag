import axios from 'axios';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getInChunks = async (
  ids,
  chunkSize,
  waitTimeMs,
) => {
  const result = [];
  for (let i = 0; i < ids.length; i += chunkSize) {
    // Chunk the ids
    const chunk = ids.slice(i, i + chunkSize);
    const [settled]: any[] = await Promise.all([
      // Download a chunk
      Promise.allSettled(
        chunk.map(async (id) => {
          // // return downloadTodo(id);
          // return Promise.resolve(id);

          return axios
            .get(
              `https://jsonplaceholder.typicode.com/todos/${id}`,
            )
            .catch((err) => {
              console.log(err);
            });
        }),
      ),
      // Make sure at least 1 second passes before the next chunk is downloaded
      sleep(waitTimeMs),
    ]);
    // Add the chunk to the result
    result.push(...settled.map((s: any) => s.value));
  }

  return await result.map((r) => r.data);
};
