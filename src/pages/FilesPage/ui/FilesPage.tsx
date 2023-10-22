import { Card } from '@/shared/ui/Card';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import pdf from '@/shared/assets/icons/pdf-icon.svg';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import { useAllContextsQuery, useClearContextMutation, useDownloadContextMutation } from '../api/filesApi';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';

const FilesPage = () => {
    const { t } = useTranslation('');
    const { data: contexts, isLoading: contextsLoading } = useAllContextsQuery();
    const [delContext, delContextResult] = useClearContextMutation();
    const [downloadContext, downloadContextResult] = useDownloadContextMutation();

    const redirectToWebsite = (url: string) => {
        window.open(
            url,
            '_blank',
        );
    };

    useNotification({
        isSuccess: {
            active: delContextResult.isSuccess,
        },
        isError: {
            active: delContextResult.isError,
        },
    });

    return (
        <VStack max gap="8" style={{ padding: '0 3rem' }}>
            <Typography text={t('Библиотека')} size='l' bold align='left' />
            <Card
                padding="24"
                variant="outlineLight"
                max
            >
                <VStack gap="8">
                    {contexts?.map((context) => (
                        <Card
                            padding="16"
                            variant="outlineLight"
                            max
                        >
                            <HStack max justify='between'>
                                <HStack gap="32">
                                    <Icon Svg={pdf} height={70} width={40} />
                                    <VStack>
                                        <Typography text={context.name} bold />
                                        <Typography text={`Загружено ${context.creation_date}`} size="s" variant="gray" />
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
                                            onClick: () => downloadContext(context.name),
                                        },
                                        {
                                            content: t('Предпросмотр'),
                                            onClick: () => redirectToWebsite(context.path),
                                        },
                                        {
                                            content: t('Удалить'),
                                            onClick: () => delContext(context.id),
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
