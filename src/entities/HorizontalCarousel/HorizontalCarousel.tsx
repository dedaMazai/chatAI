import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

import './HorizontalCarousel.scss';
import cls from './HorizontalCarousel.module.scss';

interface HorizontalCarouselProps {
    className?: string
}

export const HorizontalCarousel = (props: HorizontalCarouselProps) => {
    const { t } = useTranslation();

    const CONTENT = [
        {
            text: t('Первый отзыв мок значение, отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значениеотзыв мок значение'),
            person: t('@Name name'),
        },
        {
            text: t('Первый отзыв мок значение, отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значениеотзыв мок значение'),
            person: t('Name name 2'),
        },
        {
            text: t('Первый отзыв мок значение, отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значениеотзыв мок значение'),
            person: t('@Name name 3'),
        },
        {
            text: t('Первый отзыв мок значение, отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значениеотзыв мок значение'),
            person: t('Name name 4'),
        },
        {
            text: t('Первый отзыв мок значение, отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значение отзыв мок значениеотзыв мок значение'),
            person: t('@Name name 5'),
        },
    ];

    return (
        <div className={classNames(cls.carousel)}>
            <div className="items-wrap">
                <div className="items marquee reverce">
                    {CONTENT.map((element, index) => (
                        <div className="item" key={index}>
                            <Card style={{ width: '285px' }} padding='24'>
                                <VStack max gap="16">
                                    <Typography text={element.text} />
                                    <Typography text={element.person} variant="gray" bold />
                                </VStack>
                            </Card>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="items marquee reverce">
                    {CONTENT.map((element, index) => (
                        <div className="item" key={index}>
                            <Card style={{ width: '285px' }} padding='24'>
                                <VStack max gap="16">
                                    <Typography text={element.text} />
                                    <Typography text={element.person} variant="gray" bold />
                                </VStack>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
