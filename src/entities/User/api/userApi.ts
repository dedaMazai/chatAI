import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { userActions } from '../model/slice/userSlice';

interface ChangePassword {
    old_password: string;
    new_password: string;
    new_password_repeat: string;
}

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
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(userActions.logout());
                } catch (e) {
                    console.log(e)
                }
            },
        }),
        changePassword: build.mutation<void, ChangePassword>({
            query: (params) => ({
                url: '/password_change/',
                method: 'POST',
                params,
            }),
        }),
    }),
});

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;

export const {
    useDeleteUserMutation,
    useChangePasswordMutation,
} = userApi;
