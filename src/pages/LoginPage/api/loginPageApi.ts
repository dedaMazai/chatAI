import { rtkApi } from "@/shared/api/rtkApi";

interface Login {
  password: string;
  username : string;
}

export const loginPageApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any[], Login>({
      query: ({ username, password }) => ({
        url: '/authorization/login',
        method: 'POST',
        body: {
          password,
          username,
        }
      }),
    }),
  })
});

export const {
  useLoginMutation,
} = loginPageApi;
