import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
        deleteUser: build.mutation<void, void>({
            query: (userId) => ({
                url: '/delete_account/',
                method: 'DELETE',
            }),
        }),
    }),
});

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;

export const {
    useDeleteUserMutation,
} = userApi;
