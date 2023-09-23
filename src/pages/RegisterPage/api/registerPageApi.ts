import { rtkApi } from "@/shared/api/rtkApi";

interface Register {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export const registerPageApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<any[], Register>({
      query: ({ email, password, name, surname }) => ({
        url: '/registration/register',
        method: 'POST',
        params: {
          email ,
          hashed_password: password ,
          name ,
          surname,
        }
      }),
    }),
  })
});

export const {
  useRegisterMutation,
} = registerPageApi;
