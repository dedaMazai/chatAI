// @ts-nocheck
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import cls from './Footer.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Telegram from '@/shared/assets/icons/Telegram.svg';
import Logo from '@/shared/assets/icons/Logo.svg';
import Email from '@/shared/assets/icons/Email.svg';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <VStack align='center' gap="16" max style={{ width: '1100px' }}>
                <HStack max gap="16" justify='between'>
                    <VStack gap="8">
                        <Typography
                            bold
                            title={t('Один инструмент для всей вашей команды.')}
                            wrap
                        />
                        <Typography
                            bold
                            title={t('Приступайте прямо сейчас!')}
                            wrap
                        />
                    </VStack>
                    <HStack gap="8">
                        <Button
                            color='green'
                            jump
                            onClick={() => {}}
                        >
                            {t('Telegram')}
                        </Button>
                        <Typography
                            text={t('или')}
                        />
                        <Button
                            color='grey'
                            jump
                            onClick={() => navigate(RoutePath.PRICING())}
                        >
                            <HStack gap="4">
                                {t('Цены')}
                                <Icon Svg={ArrowDown} className={cls.iconArrow} />
                            </HStack>
                        </Button>
                    </HStack>
                </HStack>
                <hr />
                <HStack max justify='between' align='start'>
                    <VStack gap="16">
                        <Button
                            variant="clear"
                            onClick={() => navigate(RoutePath.MAIN())}
                        >
                            <Icon Svg={Logo} className={cls.iconLogo} />
                            <Typography text={t('Chat')} variant="green" bold size='l' />
                        </Button>
                        <HStack gap="16" max justify='center'>
                            <Button
                                circle
                                onClick={() => {}}
                            >
                                <Icon Svg={Telegram} className={cls.icons} />
                            </Button>
                            <Button
                                circle
                                onClick={() => {}}
                            >
                                <Icon Svg={Email} className={cls.icons} />
                            </Button>
                        </HStack>
                    </VStack>
                    <HStack gap="64" align='start'>
                        <VStack align='start'>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.PRODUCT())}
                            >
                                {t('Продукт')}
                            </Button>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.FEATURES())}
                            >
                                {t('Особенности')}
                            </Button>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.BLOG())}
                            >
                                {t('Блог')}
                            </Button>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.ABOUT())}
                            >
                                {t('О нас')}
                            </Button>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.PRICING())}
                            >
                                {t('Цены')}
                            </Button>
                        </VStack>
                        <VStack align='start'>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.LOGIN())}
                            >
                                {t('Войти')}
                            </Button>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.REGISTER())}
                            >
                                {t('Зарегистрироваться')}
                            </Button>
                            <Button
                                bold
                                variant="clearActive"
                                onClick={() => navigate(RoutePath.FAQ())}
                            >
                                {t('FAQ')}
                            </Button>
                        </VStack>
                    </HStack>
                </HStack>
                <hr />
            </VStack>
                <Typography
                    align='center'
                    variant="gray"
                    text={t('Copyrights © 2023 AIChat')}
                />
        </footer>
    );
};