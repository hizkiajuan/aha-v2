const http = {
  async get(path: string, params = {}, options = {}): Promise<Response> {
    const searchParams: string = new URLSearchParams(params).toString();
    const url: string = `${process.env.NEXT_PUBLIC_HOST}/${path}?${searchParams}`;

    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
  },
};

export default http;
