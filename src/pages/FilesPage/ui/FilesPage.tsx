import { Card } from '@/shared/ui/Card';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import pdf from '@/shared/assets/icons/pdf-icon.svg';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';

const FilesPage = () => {
    const { t } = useTranslation('');

    return (
        <VStack max gap="8" style={{ padding: '0 3rem' }}>
            <Typography text={t('Библиотека')} size='l' bold align='left' />
            <Card
                padding="24"
                variant="outlineLight"
                max
            >
                <VStack gap="8">
                    {['as', 'as'].map((file) => (
                        <Card
                            padding="16"
                            variant="outlineLight"
                            max
                        >
                            <HStack max justify='between'>
                                <HStack gap="32">
                                    <Icon Svg={pdf} height={70} width={40} />
                                    <VStack>
                                        <Typography text={t('Образец имя.pdf')} bold />
                                        <Typography text={t('Загружено 10 часов назад 185,02 КБ')} size="s" variant="gray" />
                                    </VStack>
                                </HStack>
                                <Dropdown
                                    trigger={(
                                        <Card variant="greyOne" padding="8">
                                            <HStack gap="8">
                                                <Typography text={t('Действия')} />
                                                <Icon Svg={ArrowDown} height={8} />
                                            </HStack>
                                        </Card>
                                    )}
                                    items={[
                                        {
                                            content: t('Скачать'),
                                            onClick: () => {},
                                        },
                                        {
                                            content: t('Предпросмотр'),
                                            onClick: () => {},
                                        },
                                        {
                                            content: t('Удалить'),
                                            onClick: () => {},
                                        }
                                    ]}
                                    direction="bottom left"
                                />
                            </HStack>
                        </Card>
                    ))}
                </VStack>
            </Card>
        </VStack>
    );
};

export default FilesPage;
