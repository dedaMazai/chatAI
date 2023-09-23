import { rtkApi } from "@/shared/api/rtkApi";

interface Login {
  password: string;
  email : string;
}

export const loginPageApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any[], Login>({
      query: ({ email, password }) => ({
        url: '/authorization/login',
        method: 'POST',
        body: {
          password,
          email,
        }
      }),
    }),
  })
});

export const {
  useLoginMutation,
} = loginPageApi;
