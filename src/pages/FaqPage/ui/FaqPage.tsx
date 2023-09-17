import { Accordion } from '@/shared/ui/Accordion';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

const FaqPage = () => {
    const { t } = useTranslation('');
    const LIST = [
        {
            summary: (
                <Typography
                    text={t('1. Registration')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('1.FAQ info first')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('1. Registration')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('1. FAQ info first')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('1. Registration')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('1. FAQ info first')}
                        variant="second"
                    />
                </VStack>
            ),
        },
    ]

    return (
        <VStack align='center' gap="64" max style={{ width: '1100px' }}>
            <VStack gap="8" max align='center'>
                <Typography
                    size='xl'
                    align='center'
                    bold
                    title={t('FAQ')}
                    wrap
                />
                <Typography
                    size='l'
                    text={t('Найдите ответы на все вопросы в нашем разделе часто задаваемых вопросов.')}
                    wrap
                    align='center'
                />
            </VStack>
            <Accordion list={LIST} />
        </VStack>
    );
};

export default FaqPage;
