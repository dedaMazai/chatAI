import { Card } from '@/shared/ui/Card';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import { RoutePath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';

const CHATS = ['Chat-1', 'Chat-2', 'Chat-3']

const ChatsPage = () => {
    const { t } = useTranslation('');
    const navigate = useNavigate();

    return (
        <VStack max gap="8" style={{ padding: '0 3rem' }}>
            <Typography text={t('Библиотека')} size='l' bold align='left' />
            <Card
                padding="24"
                variant="outlineLight"
                max
            >
                <VStack gap="8">
                    {CHATS.map((chat) => (
                        <Card
                            padding="16"
                            variant="outlineLight"
                            max
                        >
                            <HStack max justify='between'>
                                <VStack>
                                    <Typography text={chat} bold />
                                    <Typography text={t('07 Sep 2023 20:55')} size="s" variant="gray" />
                                </VStack>
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
                                            content: t('Открыть'),
                                            onClick: () => navigate(RoutePath.HOME_ID(chat)),
                                        },
                                        {
                                            content: t('Редактировать'),
                                            onClick: () => navigate(RoutePath.HOME_EDIT(chat)),
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

export default ChatsPage;
