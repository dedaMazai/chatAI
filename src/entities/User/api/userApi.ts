import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { userActions } from '../model/slice/userSlice';

interface ChangePassword {
    old_password: string;
    new_password: string;
    new_password_repeat: string;
}

interface UserInfo {
    id: number;
    email: string;
    name: string;
    surname: string;
    context_ids: number[];
    chat_ids: number[];
    num_of_requests_used: number;
    num_of_contexts: number;
    subscription_plan_id: number;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserInfo: build.query<UserInfo, void>({
            query: (userId) => ({
                url: '/user_information/',
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

export const {
    useDeleteUserMutation,
    useChangePasswordMutation,
    useGetUserInfoQuery,
} = userApi;
