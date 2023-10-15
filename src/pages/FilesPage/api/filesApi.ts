import { rtkApi } from "@/shared/api/rtkApi";

interface Contexts {
  id: number;
  name: string;
  user_id: number;
  type: string;
  size: number;
  path: string;
  creation_date: string;
}

export const filesApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    allContexts: builder.query<Contexts[], void>({
      query: () => ({
        url: '/context/get_contexts/',
        method: 'GET',
      }),
      providesTags: ['AllChats', 'Contexts'],
      transformResponse: (response: { contexts: Contexts[] }) => response.contexts || [],
    }),
    downloadContext: builder.mutation<void, string>({
      query: (filename) => ({
        url: '/context/download_context',
        method: 'POST',
        params: {
          filename,
        }
      }),
    }),
    clearContext: builder.mutation<void, number>({
      query: (id) => ({
        url: `/context/delete_context/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contexts'],
    }),
  })
});

export const {
  useAllContextsQuery,
  useClearContextMutation,
  useDownloadContextMutation,
} = filesApi;
