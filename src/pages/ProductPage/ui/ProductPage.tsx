import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import businessCover from '@/shared/assets/img/pandachat-business-cover.webp';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';

import cls from './ProductPage.module.scss';

const ProductPage = () => {
    const { t } = useTranslation('');
    const navigate = useNavigate();

    return (
        <VStack gap="64" className={classNames(cls.ProductPage, cls.changeFlex)}>
            <Card jump variant="blackTwo" padding="54">
                <HStack gap="64" align='start'className={cls.changeFlex} >
                    <VStack gap="16">
                        <HStack gap="16">
                            <Typography
                                size='xl'
                                bold
                                variant="white"
                                title={t('Chatwiz')}
                                wrap
                            />
                            <Card variant='black'>
                                <Typography
                                    variant="green"
                                    text={t('Бизнес')}
                                />
                            </Card>
                        </HStack>
                        <Typography
                            variant="white"
                            size='m'
                            text={t('Наша команда предлагает также кастомные решения для вашего бизнеса в качестве интегратора. Вы можете обратиться к нам с очень широким спектром задач, начиная от схожего инструмента для внутрикорпоративного использования, заканчивая умным ассистентом на вашем сайте, обученном на ваших данных.')}
                            wrap
                        />
                        <Typography
                            variant="white"
                            size='m'
                            text={t('Мы открыты для коммуникации и всегда готовы обсудить ваши даже самые смелые и амбициозные задачи.')}
                            wrap
                        />
                        <Button
                            color='green'
                            circle
                            jump
                            onClick={() => navigate(RoutePath.REGISTER())}
                        >
                            {t('Посетить сайт')}
                        </Button>
                    </VStack>
                    <img className={cls.smallImg} src={businessCover} />
                </HStack>
            </Card>
        </VStack>
    );
};

export default ProductPage;
