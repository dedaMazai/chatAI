import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { InputDrop } from '@/shared/ui/InputDrop/InputDrop';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import World from '@/shared/assets/icons/World.svg';
import YoutubeIcon from '@/shared/assets/icons/YoutubeIcon.svg';
import { useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { useStartNewChatMutation } from '@/entities/Chats';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';

import cls from './HomePage.module.scss';

const HomePage = () => {
    const { t } = useTranslation('');
    const [isOpenWorld, setIsOpenWorld] = useState(false);
    const [isOpenYouTube, setIsOpenYouTube] = useState(false);
    const [site, setSite] = useState('');
    const [youTube, setYouTube] = useState('');
    const [name, setName] = useState('');
    const [files, setFiles] = useState<FileList>();
    const navigate = useNavigate();

    const [createChat, createChatResult] = useStartNewChatMutation();

    const handleCloseSite = () => {
        setIsOpenWorld(false);
        setSite('');
    };

    const handleCloseTube = () => {
        setIsOpenYouTube(false);
        setYouTube('');
    };

    useNotification({
        isLoading: {
            active: createChatResult.isLoading,
        },
    });

    useEffect(() => {
        if (files?.[0] && name) {
            console.log(1, files[0])
            const formData = new FormData();
            formData.append('file', files[0]);

            createChat({
                name,
                file: formData,
            })
        } else if (files?.[0] && !name) {
            toast.error(t('Введите название файла'));
            setFiles(undefined);
        }
    }, [files])

    useEffect(() => {
        setFiles(undefined)
        setName('')
        if (createChatResult.isSuccess) {
            navigate(RoutePath.HOME_ID(`${createChatResult.data.id}`))
        }
    }, [createChatResult])

    return (
        <VStack style={{ paddingTop: '1rem' }} max align="center" gap="32">
            <Typography
                size='xl'
                bold
                text={t('Начните чат с загрузки файлов')}
                align='center'
                wrap
            />
            <Input
                value={name}
                onChange={(value) => {setName(value)}}
                label={t('Название чата')}
                className={cls.nameInput}
            />
            <InputDrop
                onChange={(files) => {
                    setFiles(files)
                }}
                isLoading={createChatResult.isLoading}
            />
            <Typography
                size='l'
                bold
                text={t('Или импортируйте из разных веб-источников.')}
                align='center'
                wrap
            />
            <HStack gap="16">
                <Button color="grey" onClick={() => setIsOpenWorld(true)}>
                    <HStack gap="8">
                        <Icon Svg={World} />
                        {t('Веб-страница')}
                    </HStack>
                </Button>
                <Button color="grey" onClick={() => setIsOpenYouTube(true)}>
                    <HStack gap="8">
                        <Icon Svg={YoutubeIcon} />
                        {t('YouTube')}
                    </HStack>
                </Button>
            </HStack>
            <Modal isOpen={isOpenWorld} onClose={handleCloseSite} lazy>
                <VStack max gap="24" align='center' className={cls.modalInput}>
                    <Typography
                        bold
                        text={t('Веб-страница')}
                        align='center'
                        wrap
                    />
                    <Input value={site} onChange={(value) => {setSite(value)}} addonLeft={<Icon Svg={World} />} />
                    <Button disabled={!site} onClick={() => {}}>
                        {t('Старт')}
                    </Button>
                </VStack>
            </Modal>
            <Modal isOpen={isOpenYouTube} onClose={handleCloseTube} lazy>
                <VStack max gap="24" align='center' className={cls.modalInput}>
                    <Typography
                        bold
                        text={t('YouTube')}
                        align='center'
                        wrap
                    />
                    <Input value={youTube} onChange={(value) => {setYouTube(value)}} addonLeft={<Icon Svg={YoutubeIcon} />} />
                    <Button disabled={!youTube} onClick={() => {}}>
                        {t('Старт')}
                    </Button>
                </VStack>
            </Modal>
        </VStack>
    );
};

export default HomePage;
