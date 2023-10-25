import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/shared/ui/Icon';
import { Toggle } from '@/shared/ui/Toggle/Toggle';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import Arrow from '@/shared/assets/icons/Arrow.svg';
import Ok from '@/shared/assets/icons/Ok.svg';
import OkFill from '@/shared/assets/icons/OkFill.svg';

import cls from './UpgradePlanPage.module.scss';

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

const UpgradePlanPage = () => {
    const { t } = useTranslation('');
    const [state, setState] = useState(false);

    return (
        <VStack max align="center" gap="24">
            <Typography
                size='l'
                bold
                text={t('Найдите подходящий для вас')}
                align='center'
                wrap
            />
            {/* <HStack max justify='center' align='end' gap="16">
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
            </HStack> */}
            <HStack max gap="24" justify='center' className={cls.changeFlex}>
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
                        onClick={() => {}}
                    >
                        <Typography
                            variant='main'
                            text={t('Выберете базовый')}
                        />
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
                        onClick={() => {}}
                    >
                        {t('Выберете PRO')}
                    </Button>
                </Card>
            </HStack>
        </VStack>
    );
};

export default UpgradePlanPage;
