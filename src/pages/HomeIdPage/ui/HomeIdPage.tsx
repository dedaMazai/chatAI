import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ShareIcon from '@/shared/assets/icons/ShareIcon.svg';
import File from '@/shared/assets/icons/File.svg';
import Settings from '@/shared/assets/icons/Settings.svg';
import Send from '@/shared/assets/icons/Send.svg';
import { Typography } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Typewriter } from '@/shared/ui/Typewriter';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useChatQuery, useClearChatMutation, useSendQuestionMutation } from '@/entities/Chats';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';

import cls from './HomeIdPage.module.scss';

const HomeIdPage = () => {
    const { t } = useTranslation('');
    const { id } = useParams<{ id: string }>();
    const chatRef:  MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [question, setQuestion] = useState('');

    const { data: chat, isLoading: chatLoading } = useChatQuery(+id!, {
        skip: !id
    });
    const [clearChat, clearChatResult] = useClearChatMutation();
    const [sendQuestion, sendQuestionResult] = useSendQuestionMutation();

    useEffect(() => {
        chatRef.current?.scrollIntoView(false);
    }, [])

    useEffect(() => {
        if (sendQuestionResult.isSuccess) {
            setQuestion('');
        }
    }, [sendQuestionResult])

    useNotification({
        isLoading: {
            active: sendQuestionResult.isLoading,
        },
        isError: {
            active: sendQuestionResult.isError,
            text: t('Ошибка отправки смс'),
        },
    });

    useNotification({
        isSuccess: {
            active: clearChatResult.isSuccess,
        },
        isError: {
            active: clearChatResult.isError,
            text: t('Ошибка очистки чата'),
        },
    });

    return (
        <VStack max fullHeight gap="8">
            <HStack max justify="between" className={cls.header}>
                <HStack gap="8">
                    <Icon Svg={File} height={20} width={20} />
                    <Typography text={chat?.chat_name} size="l" bold />
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
                        disabled={!id}
                        onClick={() => clearChat(+id!)}
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
                    {chat?.pdf_url && (
                        <embed
                            className={cls.pdf}
                            type="application/pdf"
                            src={chat?.pdf_url}
                        />
                    )}
                </div>
                <VStack justify="between" gap="8" className={cls.chatWrapper}>
                    <div className={cls.chat}>
                        {chat?.message_history.chat.map(([from, sms], index) => (
                            <HStack key={index} max justify={from === 'human' ? "end" : "start"}>
                                <Card
                                    ref={index === chat?.message_history.chat.length - 1 ? chatRef : undefined}
                                    className={cls.smsCard} variant={from === 'human' ? "green" : "greyOne"}
                                >
                                    {(index === chat?.message_history.chat.length - 1) && from === "ai" ? (
                                        <Typewriter text={sms} delay={50}  />
                                    ) : sms}
                                </Card>
                            </HStack>
                        ))}
                    </div>
                    <HStack gap="16" max className={cls.inputWrapper}>
                        <Input
                            placeholder={t('Задай мне вопрос о документе...')}
                            value={question}
                            onChange={(value) => setQuestion(value)}
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
                                disabled={!question || !id}
                                onClick={() => sendQuestion({
                                    chat_id: +id!,
                                    question,
                                })}
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
