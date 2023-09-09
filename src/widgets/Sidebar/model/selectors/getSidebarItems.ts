import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteForbidden,
    getRouteMain,
} from '@/shared/const/router';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteForbidden(),
            Icon: AboutIcon,
            text: 'Нет доступа',
        },
    ];

    return sidebarItemsList;
};
