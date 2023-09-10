import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

import MainIcon from '@/shared/assets/icons/home.svg';

import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.MAIN(),
            Icon: MainIcon,
            text: 'Главная',
        },
    ];

    return sidebarItemsList;
};
