import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import Logo from '@/shared/assets/icons/Logo.svg';
import { Icon } from '@/shared/ui/Icon';

import cls from './Navbar.module.scss';
import { Typography } from '@/shared/ui/Text';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack gap="16" className={cls.actions}>
                    <Button
                        variant="clear"
                        className={cls.links}
                        onClick={() => {}}
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
                    onClick={() => {}}
                >
                    <Icon Svg={Logo} className={cls.iconLogo} />
                    <Typography text={t('Chat')} variant="green" bold size='l' />
                </Button>
                <HStack gap="16" className={cls.buttonBlock}>
                    <Button
                        variant="clearActive"
                        onClick={() => {}}
                    >
                        {t('Особенности')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => {}}
                    >
                        {t('Блог')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => {}}
                    >
                        {t('О нас')}
                    </Button>
                    <Button
                        variant="clearActive"
                        onClick={() => {}}
                    >
                        {t('Цены')}
                    </Button>
                    <Button
                        color='grey'
                        circle
                        jump
                        onClick={() => {}}
                    >
                        {t('Войти')}
                    </Button>
                    <Button
                        color='green'
                        circle
                        jump
                        onClick={() => {}}
                    >
                        {t('Зарегистрироваться')}
                    </Button>
                </HStack>
            </HStack>
        </header>
    );
});
