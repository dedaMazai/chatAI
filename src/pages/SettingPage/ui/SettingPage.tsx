import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import cls from './SettingPage.module.scss';

const SettingPage = () => {
    const { t } = useTranslation('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [index, setIndex] = useState('');
    const [nowPassword, setNowPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAccessPassword, setNewAccessPassword] = useState('');

    return (
        <VStack max gap="8" style={{ padding: '0 3rem' }}>
            <Typography text={t('Настройки')} size='l' bold align='left' />
            <VStack max align="center" gap="32">
                <Card
                    padding="24"
                    variant="outlineLight"
                    header={(
                        <Typography text={t('Основаная информация')} bold />
                    )}
                    max
                >
                    <VStack gap="24" max>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Полное имя')} />
                            <Input
                                className={cls.inputBlock}
                                value={name}
                                placeholder={t('Ваше имя')}
                                onChange={(value) => {setName(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Электронная почта')} />
                            <Input
                                className={cls.inputBlock}
                                value={email}
                                placeholder={t('Ваше электронная почта')}
                                onChange={(value) => {setEmail(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Организация')} />
                            <Input
                                className={cls.inputBlock}
                                value={organization}
                                placeholder={t('Ваша организация')}
                                onChange={(value) => {setOrganization(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Город')} />
                            <Input
                                className={cls.inputBlock}
                                value={city}
                                placeholder={t('Ваш город')}
                                onChange={(value) => {setCity(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Адрес')} />
                            <Input
                                className={cls.inputBlock}
                                value={address}
                                placeholder={t('Ваш адрес')}
                                onChange={(value) => {setAddress(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Почтовый индекс')} />
                            <Input
                                className={cls.inputBlock}
                                value={index}
                                placeholder={t('Ваш почтовый индекс')}
                                onChange={(value) => {setIndex(value)}}
                            />
                        </HStack>
                        <HStack max justify='end'>
                            <Button>{t('Сохранить изменения')}</Button>
                        </HStack>
                    </VStack>
                </Card>
                <Card
                    padding="24"
                    variant="outlineLight"
                    header={(
                        <Typography text={t('Изменение пароля')} bold />
                    )}
                    max
                >
                    <VStack gap="24" max>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Текущий пароль')} />
                            <Input
                                className={cls.inputBlock}
                                value={nowPassword}
                                placeholder={t('Введите текущий пароль')}
                                onChange={(value) => {setNowPassword(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Новый пароль')} />
                            <Input
                                className={cls.inputBlock}
                                value={newPassword}
                                placeholder={t('Введите новый пароль')}
                                onChange={(value) => {setNewPassword(value)}}
                            />
                        </HStack>
                        <HStack max gap="24" justify="between">
                            <Typography text={t('Подтвердите новый пароль')} />
                            <Input
                                className={cls.inputBlock}
                                value={newAccessPassword}
                                placeholder={t('Подтвердите новый пароль')}
                                onChange={(value) => {setNewAccessPassword(value)}}
                            />
                        </HStack>
                        <HStack max justify='end'>
                            <Button>{t('Сохранить изменения')}</Button>
                        </HStack>
                    </VStack>
                </Card>
                <Card
                    padding="24"
                    variant="outlineLight"
                    header={(
                        <Typography text={t('Удалить аккаунт')} bold />
                    )}
                    max
                >
                    <VStack gap="24" max>
                        <Typography variant="gray" text={t('Когда вы удаляете свою учетную запись, вы теряете доступ к услугам учетной записи PandaChat, и мы навсегда удаляем ваши личные данные. Активные подписки будут отменены.')} bold />
                        <HStack max justify='end'>
                            <Button color="red">{t('Удалить аккаунт')}</Button>
                        </HStack>
                    </VStack>
                </Card>
            </VStack>
        </VStack>
    );
};

export default SettingPage;
