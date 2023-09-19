import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { InputDrop } from '@/shared/ui/InputDrop/InputDrop';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import World from '@/shared/assets/icons/World.svg';
import YoutubeIcon from '@/shared/assets/icons/YoutubeIcon.svg';
import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input/Input';

const HomePage = () => {
    const { t } = useTranslation('');
    const [isOpenWorld, setIsOpenWorld] = useState(false);
    const [isOpenYouTube, setIsOpenYouTube] = useState(false);

    return (
        <VStack max align="center" gap="32">
            <Typography
                size='xl'
                bold
                text={t('Начните чат с загрузки файлов')}
                align='center'
                wrap
            />
            <InputDrop />
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
            <Modal isOpen={isOpenWorld} onClose={() => setIsOpenWorld(false)} lazy>
                <VStack max gap="24" align='center'>
                    <Typography
                        bold
                        text={t('Веб-страница')}
                        align='center'
                        wrap
                    />
                    <Input />
                </VStack>
            </Modal>
            <Modal isOpen={isOpenYouTube} onClose={() => setIsOpenYouTube(false)} lazy>
                <VStack max gap="24" align='center'>
                    <Typography
                        bold
                        text={t('YouTube')}
                        align='center'
                        wrap
                    />
                    <Input />
                </VStack>
            </Modal>
        </VStack>
    );
};

export default HomePage;
