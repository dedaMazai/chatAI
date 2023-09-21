import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ShareIcon from '@/shared/assets/icons/ShareIcon.svg';
import Settings from '@/shared/assets/icons/Settings.svg';
import Send from '@/shared/assets/icons/Send.svg';
import { Typography } from '@/shared/ui/Text';

import cls from './HomeIdPage.module.scss';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Typewriter } from '@/shared/ui/Typewriter';

const EXAMPLE = [
    {
        id: 1,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'from',
    },
    {
        id: 2,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweeeeeeeeeeeeee wefffffffff wefweeeeeeeeeeeeee 44444444',
        type: 'to',
    },
    {
        id: 3,
        text: '234444444444',
        type: 'from',
    },
    {
        id: 4,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 5,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 6,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 7,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 8,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 9,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 10,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'to',
    },
    {
        id: 11,
        text: '2344 wfweffew  ewf ewf ewf ewf ewf ewf   wefewf wefwefwe wefwefew ewf ewfewfwefew ewfwefwef wefwefweee',
        type: 'from',
    },
]

const HomeIdPage = () => {
    const { t } = useTranslation('');
    const { id } = useParams<{ id: string }>();

    return (
        <VStack max fullHeight>
            <HStack max justify="between" className={cls.header}>
                <HStack gap="8">
                    <Icon Svg={ShareIcon} />
                    <Typography text={id} size="l" bold />
                </HStack>
                <HStack gap="16">
                    <Button
                        color="grey"
                        onClick={() => {}}
                    >
                        {t('Краткое содержание')}
                    </Button>
                    <Button
                        color="grey"
                        onClick={() => {}}
                    >
                        {t('Очистить')}
                    </Button>
                    <Button
                        color="grey"
                        onClick={() => {}}
                    >
                        <Icon Svg={ShareIcon} />
                    </Button>
                    <Button
                        color="grey"
                        onClick={() => {}}
                    >
                        <Icon Svg={Settings} />
                    </Button>
                </HStack>
            </HStack>
            <HStack max fullHeight>
                <div className={cls.pdfViewer}>
                    123
                </div>
                <VStack justify="between" gap="8" className={cls.chatWrapper}>
                    <div className={cls.chat}>
                        {EXAMPLE.map((sms, index) => (
                            <HStack key={sms.id} max justify={sms.type === 'to' ? "end" : "start"}>
                                <Card className={cls.smsCard} variant={sms.type === 'to' ? "green" : "greyOne"}>
                                    {(index === EXAMPLE.length - 1) && sms.type === "from" ? (
                                        <Typewriter text={sms.text} delay={100} />
                                    ) : sms.text}
                                </Card>
                            </HStack>
                        ))}
                    </div>
                    <HStack gap="16" max className={cls.inputWrapper}>
                        <Input
                            placeholder={t('Задай мне вопрос о документе...')}
                        />
                        <HStack gap="8">
                            {/* <Button
                                fullHeight
                                color="grey"
                                onClick={() => {}}
                            >
                                <Icon Svg={ShareIcon} />
                            </Button> */}
                            <Button
                                fullHeight
                                color="green"
                                onClick={() => {}}
                            >
                                <Icon Svg={Send} className={cls.send} />
                            </Button>
                        </HStack>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    );
};

export default HomeIdPage;
