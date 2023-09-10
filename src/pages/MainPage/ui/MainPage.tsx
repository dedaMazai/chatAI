import { Counter } from '@/entities/Counter';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import EditIcon from '@/shared/assets/icons/edit.svg';
import { Accordion } from '@/shared/ui/Accordion';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };
    const LIST = [
        {
            summary: (
                <Typography
                    text={t('1. Registration')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('1.FAQ info first')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('1. Registration')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('1. FAQ info first')}
                        variant="second"
                    />
                </VStack>
            ),
        },
    ]

    return (
        <VStack max>
            <div>Кнопки</div>
            <Button variant="clear">123</Button>
            <Button variant="outline">
                <HStack>
                    <Icon Svg={EditIcon} />
                </HStack>
            </Button>
            <Button circle>123</Button>
            <Button size="l">123</Button>
            <Button size="m">123</Button>
            <Button size="xl">123</Button>
            <Button color="greenLight">123</Button>
            <Button color="grey">123</Button>
            <Button color="black">123</Button>
            <Button color="red">123</Button>
            <Typography text="asdasasd" size="l" />
            <Typography text="asdasasd" size="m" />
            <Typography text="asdasasd" size="s" />
            <Typography text="asdasasd" variant="main" />
            <Typography text="asdasasd" variant="second" />
            <Typography text="asdasasd" variant="red" />
            <Typography text="asdasasd" variant="white" />
            <Typography text="asdasasd" variant="black" />
            <Typography text="asdasasd" variant="green" />
            {/* <Accordion list={LIST} /> */}
            <Card>
                <Typography text="asdasasd" variant="black" />
            </Card>
            <Card variant="greyOne">
                <Typography text="asdasasd" variant="black" />
            </Card>
            <Card variant="greyTwo" border="round">
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
            </Card>
            <Card
                variant="outline"
                border="partial"
                header={(
                    <Typography text="asdasasd" variant="black" />
                )}
            >
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="black" />
            </Card>
            <Typography text="asdasasd" variant="green" />
            <Typography text="asdasasd" variant="green" />
            <Typography text="asdasasd" variant="green" />
            <Input
                placeholder='asdasdas'
                addonLeft={(
                    <Typography text="11" variant="black" />
                )}
                addonRight={(
                    <Typography text="11" variant="black" />
                )}
            />
            {/* {t('Главная страница')}
            <Counter />
            <LangSwitcher />
            <ThemeSwitcher /> */}
        </VStack>
    );
};

export default MainPage;
