import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData, userActions } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import Logo from '@/shared/assets/icons/Logo.svg';
import Folder from '@/shared/assets/icons/Folder.svg';
import Sms from '@/shared/assets/icons/Sms.svg';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { LangSwitcher } from '@/features/LangSwitcher';
import { SearchOnSite } from '@/features/SearchOnSite';
import { Dropdown } from '@/shared/ui/Dropdown';

import cls from './Navbar.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(userActions.logout());
    }

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack justify='between' max gap="16">
                    <SearchOnSite />
                    <HStack gap="16">
                        <Button
                            color="grey"
                            onClick={() => navigate(RoutePath.CHATS())}
                        >
                            <HStack gap="8">
                                <Icon Svg={Sms} className={cls.iconSms} />
                                <Typography text={t('Все чаты')} />
                            </HStack>
                        </Button>
                        <Button
                            color="grey"
                            onClick={() => navigate(RoutePath.FILES())}
                        >
                            <HStack gap="8">
                                <Icon Svg={Folder} className={cls.iconBtn} />
                                <Typography text={t('Библиотека')} />
                            </HStack>
                        </Button>
                        <Dropdown
                            gap
                            trigger={(
                                <div className={cls.circle}>
                                    <Typography title="A" variant="white" bold />
                                </div>
                            )}
                            items={[
                                {
                                    content: t('Настройки'),
                                    onClick: () => navigate(RoutePath.SETTINGS()),
                                },
                                {
                                    content: t('Выйти'),
                                    onClick: handleLogout,
                                }
                            ]}
                            direction="bottom left"
                        />
                    </HStack>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack justify='between' max gap="16">
                <HStack gap="16">
                    <Button
                        variant="clear"
                        onClick={() => navigate(RoutePath.MAIN())}
                    >
                        <Icon Svg={Logo} className={cls.iconLogo} />
                        <Typography text={t('Chat')} variant="green" bold size='l' />
                    </Button>
                    <LangSwitcher short />
                </HStack>
                <HStack max justify="end">
                    <Button
                        variant="clearActive"
                        onClick={() => navigate(RoutePath.PRODUCT())}
                    >
                        {t('Продукт')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => navigate(RoutePath.FEATURES())}
                    >
                        {t('Особенности')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => navigate(RoutePath.BLOG())}
                    >
                        {t('Новости')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => navigate(RoutePath.ABOUT())}
                    >
                        {t('О нас')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => navigate(RoutePath.PRICING())}
                    >
                        {t('Цены')}
                    </Button>
                    <HStack gap="8">
                        <Button
                            color='grey'
                            circle
                            jump
                            onClick={() => navigate(RoutePath.LOGIN())}
                        >
                            {t('Войти')}
                        </Button>
                        <Button
                            color='green'
                            circle
                            jump
                            onClick={() => navigate(RoutePath.REGISTER())}
                        >
                            {t('Зарегистрироваться')}
                        </Button>
                    </HStack>
                </HStack>
            </HStack>
        </header>
    );
});
