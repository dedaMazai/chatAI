import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { Toggle } from '@/shared/ui/Toggle/Toggle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Arrow from '@/shared/assets/icons/Arrow.svg';
import Ok from '@/shared/assets/icons/Ok.svg';
import OkFill from '@/shared/assets/icons/OkFill.svg';
import { Icon } from '@/shared/ui/Icon';
import Caltech from '@/shared/assets/icons/Caltech.svg';
import Cambridge from '@/shared/assets/icons/Cambridge.svg';
import Harvard from '@/shared/assets/icons/Harvard.svg';
import Insta from '@/shared/assets/icons/Insta.svg';
import Meta from '@/shared/assets/icons/Meta.svg';
import Oxford from '@/shared/assets/icons/Oxford.svg';
import { Button } from '@/shared/ui/Button';

import cls from './PricingPage.module.scss';
import { RoutePath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';

const FREE = [
    '10 кредитов в месяц',
    '100 страниц в файле',
    '1 источник на чат',
    'История чата',
    'Отрегулируйте модель/температуру'
];

const BASE = [
    '50 кредитов в месяц',
    '200 страниц в файле',
    '3 источника на чат',
    'История чата',
    'Отрегулируйте модель/температуру',
    'Ранний доступ к бета-функциям',
    'Инструмент обобщения',
];

const PRO = [
    '150 кредитов в месяц',
    '400 страниц в файле',
    '5 источников на чат',
    'История чата',
    'Отрегулируйте модель/температуру',
    'Ранний доступ к бета-функциям',
    'Инструмент обобщения',
];

const PricingPage = () => {
    const { t } = useTranslation('');
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    return (
        <VStack align='center' gap="64" style={{ width: '1100px' }}>
            <Typography
                size='xl'
                bold
                title={t('Найдите подходящий план для вашего сайта')}
                align='center'
                wrap
            />
            <HStack max justify='center' align='end' gap="16">
                <Typography
                    text={t('Ежемесяно')}
                    align='center'
                    wrap
                />
                <Toggle checked={state} className={cls.toggle} onChange={() => setState((prev) => !prev)} />
                <VStack>
                    <HStack className={cls.editHStack}>
                        <Icon Svg={Arrow} className={cls.icon} />
                        <Card variant='green' className={cls.cardEdit}>
                            <Typography
                                text={t('Экономия до 10%')}
                                variant="white"
                                size='s'
                            />
                        </Card>
                    </HStack>
                    <Typography
                        text={t('Ежегодно')}
                        align='center'
                        wrap
                    />
                </VStack>
            </HStack>
            <HStack max gap="24" justify='center'>
                <Card className={cls.card} variant="outline" padding="32" fullHeight>
                    <VStack max gap="16" align='center'>
                        <VStack max gap="8" align='center'>
                            <Typography
                                size='l'
                                bold
                                title={t('Бесплатно')}
                                align='center'
                            />
                            <Typography
                                size='l'
                                bold
                                text={t('Персональный')}
                                align='center'
                            />
                            <Typography
                                text={t('Все основы работы с документами')}
                                align='center'
                            />
                        </VStack>
                        <VStack max gap="8" align='start'>
                            {FREE.map((text) => (
                                <HStack gap="8">
                                    <Icon Svg={Ok} />
                                    <Typography
                                        text={t(text)}
                                        align='left'
                                    />
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>
                    <Button
                        color='green'
                        fullWidth
                        onClick={() => navigate(RoutePath.REGISTER())}
                    >
                        {t('Попробовать бесплатно')}
                    </Button>
                </Card>
                <Card className={cls.card} variant="green" padding="32" fullHeight>
                    <VStack max gap="16" align='center'>
                        <VStack max gap="8" align='center'>
                            <HStack gap="4">
                                <Typography
                                    size='l'
                                    bold
                                    variant='white'
                                    title={state ? '50' : '100'}
                                    align='center'
                                />
                                <Typography
                                    text={t('/ в месяц')}
                                    align='center'
                                    variant='white'
                                />
                            </HStack>
                            <Typography
                                size='l'
                                bold
                                text={t('Персональный')}
                                variant='white'
                                align='center'
                            />
                            <Typography
                                text={t('Все основы работы с документами')}
                                align='center'
                                variant='white'
                            />
                        </VStack>
                        <VStack max gap="8" align='start'>
                            {BASE.map((text) => (
                                <HStack gap="8">
                                    <Icon Svg={OkFill} />
                                    <Typography
                                        variant='white'
                                        text={t(text)}
                                        align='left'
                                    />
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>
                    <Button
                        color='grey'
                        fullWidth
                        onClick={() => navigate(RoutePath.REGISTER())}
                    >
                        {t('Выберете базовый')}
                    </Button>
                </Card>
                <Card className={cls.card} variant="outline" padding="32" fullHeight>
                    <VStack max gap="16" align='center'>
                        <VStack max gap="8" align='center'>
                            <HStack gap="4">
                                <Typography
                                    size='l'
                                    bold
                                    title={state ? '100' : '200'}
                                    align='center'
                                />
                                <Typography
                                    text={t('/ в месяц')}
                                    align='center'
                                />
                            </HStack>
                            <Typography
                                size='l'
                                bold
                                text={t('PRO')}
                                align='center'
                            />
                            <Typography
                                text={t('Массивный анализ документов с круглосуточной поддержкой.')}
                                align='center'
                            />
                        </VStack>
                        <VStack max gap="8" align='start'>
                            {PRO.map((text) => (
                                <HStack gap="8">
                                    <Icon Svg={Ok} />
                                    <Typography
                                        text={t(text)}
                                        align='left'
                                    />
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>
                    <Button
                        color='green'
                        fullWidth
                        onClick={() => navigate(RoutePath.REGISTER())}
                    >
                        {t('Выберете PRO')}
                    </Button>
                </Card>
            </HStack>
            <VStack max gap="24" align='center'>
                <Typography
                    size='xl'
                    bold
                    title={t('Нам доверяют')}
                    align='center'
                    wrap
                />
                <HStack gap="32">
                    <Icon height={70} width={120} Svg={Caltech} />
                    <Icon height={70} width={150} Svg={Cambridge} />
                    <Icon height={70} width={150} Svg={Harvard} />
                    <Icon height={70} width={150} Svg={Insta} />
                    <Icon height={70} width={120} Svg={Meta} />
                    <Icon height={70} width={150} Svg={Oxford} />
                </HStack>
            </VStack>
        </VStack>
    );
};

export default PricingPage;
