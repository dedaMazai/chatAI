import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import Logo from '@/shared/assets/icons/Logo.svg';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useNavigate } from 'react-router-dom';

import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData);

    const logout = () => {
        navigate(RoutePath.MAIN())
    }

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack gap="16" className={cls.actions}>
                    <Button
                        variant="clear"
                        className={cls.links}
                        onClick={logout}
                    >
                        {t('Выйти')}
                    </Button>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack justify='between' max gap="16">
                <Button
                    variant="clear"
                    onClick={() => navigate(RoutePath.MAIN())}
                >
                    <Icon Svg={Logo} className={cls.iconLogo} />
                    <Typography text={t('Chat')} variant="green" bold size='l' />
                </Button>
                <HStack gap="16" className={cls.buttonBlock}>
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
                        {t('Блог')}
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
        </header>
    );
});
