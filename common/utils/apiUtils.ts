const DEV_API_URL = 'http://127.0.0.1:8000/api/v1';

async function client(
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig }: any = {}
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window
    .fetch(`${DEV_API_URL}/${endpoint}`, config)
    .then(async (response) => {
      /*
    if (response.status === 401) {
      await auth.logout()
      // refresh the page for them
      window.location.assign(window.location)
      return Promise.reject({message: 'Please re-authenticate.'})
    }
    */
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
