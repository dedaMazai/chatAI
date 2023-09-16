import { HorizontalCarousel } from '@/entities/HorizontalCarousel';
import { Counter } from '@/entities/Counter';
import { LangSwitcher } from '@/features/LangSwitcher';
import { SearchOnSite } from '@/features/SearchOnSite';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import EditIcon from '@/shared/assets/icons/Edit.svg';
import { Accordion } from '@/shared/ui/Accordion';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Icon } from '@/shared/ui/Icon';
import { InputDrop } from '@/shared/ui/InputDrop/InputDrop';
import { LinkScroll } from '@/shared/ui/LinkScroll/LinkScroll';
import { LoaderInput } from '@/shared/ui/LoaderInput';
import { Progress } from '@/shared/ui/Progress/Progress';
import { SearchField } from '@/shared/ui/SearchField/SearchField';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { Toggle } from '@/shared/ui/Toggle/Toggle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CoverLaptop from '@/shared/assets/img/cover-laptop.webp';
import banking from '@/shared/assets/img/banking.webp';
import business from '@/shared/assets/img/business.webp';
import commerce from '@/shared/assets/img/e-commerce.webp';
import education from '@/shared/assets/img/education.webp';
import healthcare from '@/shared/assets/img/healthcare.webp';
import resources from '@/shared/assets/img/human-resources.webp';
import insurance from '@/shared/assets/img/insurance.webp';
import tourism from '@/shared/assets/img/tourism.webp';
import graph from '@/shared/assets/img/graph-section.webp';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [toggle, setToggle] = useState(false);
    const [activeButton, setActiveButton] = useState<string>();

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
        <VStack align='center' gap="64" max style={{ width: '1100px' }}>
            <HStack max gap="16" justify='center'>
                <VStack gap="16">
                    <Typography
                        size='xl'
                        bold
                        title={t('Мгновенно разбирайтесь в любых данных с помощью искусственного интеллекта')}
                        wrap
                    />
                    <Button
                        color='green'
                        circle
                        size="l"
                        jump
                        onClick={() => {}}
                    >
                        {t('Попробовать')}
                    </Button>
                </VStack>
                <img src={CoverLaptop} />
            </HStack>
            <VStack gap="24" max>
                <Typography
                    size='xl'
                    bold
                    title={t('Поприветствуйте новую эру эффективности и продуктивности')}
                    align='center'
                    wrap
                />
                <Typography
                    size='l'
                    text={t('Независимо от того, занимаетесь ли вы учебой, исследованиями или просто изучаете новые темы, наш инструмент разработан для того, чтобы помочь вам быстро и легко найти и понять необходимую информацию.')}
                    wrap
                    align='center'
                />
            </VStack>
            <HStack max justify='center'>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/RlwFqc7gS7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </HStack>
            <HStack max gap="32" justify='center'>
                <Card padding='24' variant='greyOne'>
                    <VStack gap="16">
                        <Typography size="l" bold text={t('Загружайте любые данные за секунды')} />
                        <Typography text={t('Безопасно загружайте все, что угодно, из PowerPoints, документов Word, Excel, изображений, веб-сайтов в PDF-файлы или просматривайте весь веб-сайт целиком. Panda, которая будет искать ваши данные и использовать их для выработки разумных ответов.')} />
                    </VStack>
                </Card>
                <Card padding='24' variant='greyOne'>
                    <VStack gap="16">
                        <Typography size="l" bold text={t('Мгновенные ответы на ваши вопросы')} />
                        <Typography text={t('Нет необходимости искать руководства или просматривать бесконечные документы. Pandashan анализирует все накопленные документы и выступает в качестве эксперта по всем вашим процессам, чтобы за считанные секунды предоставить необходимый вам ответ.')} />
                    </VStack>
                </Card>
            </HStack>
            <Typography
                size='xl'
                bold
                align="center"
                title={t('Трансформация всех отраслей промышленности с использованием возможностей искусственного интеллекта')}
                wrap
            />
            <VStack max gap="16" align='center'>
                <Card variant='greyOne' border="round" max>
                    <HStack gap="16" max justify='center'>
                        <Button
                            variant={activeButton === 'Образование' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Образование')}
                            circle
                        >
                            {t('Образование')}
                        </Button>
                        <Button
                            variant={activeButton === 'Ресурсы' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Ресурсы')}
                            circle
                        >
                            {t('Ресурсы')}
                        </Button>
                        <Button
                            variant={activeButton === 'Бизнес' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Бизнес')}
                            circle
                        >
                            {t('Бизнес')}
                        </Button>
                        <Button
                            variant={activeButton === 'Коммерция' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Коммерция')}
                            circle
                        >
                            {t('Коммерция')}
                        </Button>
                        <Button
                            variant={activeButton === 'Финансы' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Финансы')}
                            circle
                        >
                            {t('Финансы')}
                        </Button>
                        <Button
                            variant={activeButton === 'Здравоохранение' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Здравоохранение')}
                            circle
                        >
                            {t('Здравоохранение')}
                        </Button>
                        <Button
                            variant={activeButton === 'Туризм' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Туризм')}
                            circle
                        >
                            {t('Туризм')}
                        </Button>
                        <Button
                            variant={activeButton === 'Страхование' ? 'filled' : 'clearActive'}
                            onClick={() => setActiveButton('Страхование')}
                            circle
                        >
                            {t('Страхование')}
                        </Button>
                    </HStack>
                </Card>
                {activeButton === 'Образование' && <img height={650} width={1000} src={education} />}
                {activeButton === 'Ресурсы' && <img height={650} width={1000} src={resources} />}
                {activeButton === 'Бизнес' && <img height={650} width={1000} src={business} />}
                {activeButton === 'Коммерция' && <img height={650} width={1000} src={commerce} />}
                {activeButton === 'Финансы' && <img height={650} width={1000} src={banking} />}
                {activeButton === 'Здравоохранение' && <img height={650} width={1000} src={healthcare} />}
                {activeButton === 'Туризм' && <img height={650} width={1000} src={tourism} />}
                {activeButton === 'Страхование' && <img height={650} width={1000} src={insurance} />}
            </VStack>
            <Card variant="black" padding="54">
                <HStack gap="16" align='start'>
                    <VStack gap="16">
                        <Card variant='greyTwo'>
                            <Typography
                                text={t('ИСТОЧНИК: JUNIPER RESEARCH')}
                            />
                        </Card>
                        <Typography
                            size='xl'
                            bold
                            variant="white"
                            title={t('$11 миллиардов в год')}
                            wrap
                        />
                        <Typography
                            variant="white"
                            size='m'
                            text={t('Внедрение чат-ботов в сфере розничной торговли, банковского дела и здравоохранения позволит снизить затраты бизнеса на 11 миллиардов долларов в год.')}
                            wrap
                        />
                        <Button
                            color='green'
                            circle
                            jump
                            onClick={() => {}}
                        >
                            {t('Узнать больше')}
                        </Button>
                    </VStack>
                    <img height={300} width={300} src={graph} />
                </HStack>
            </Card>
            <Typography
                size='xl'
                bold
                align="center"
                title={t('Поддержка ваших любимых приложений')}
                wrap
            />
            {/* <VStack>
                <div>Кнопки</div>
                <SearchOnSite />
                <LinkScroll
                    name="ТТТТЫЫЫЫККК"
                    href="#work"
                />
                <LoaderInput />
                <Button variant="clear">123</Button>
                <Button variant="outline">
                    <HStack>
                        <Icon Svg={EditIcon} />
                    </HStack>
                </Button>
                <Button circle>123</Button>
                <HorizontalCarousel />
                <Button size="l">123</Button>
                <Button size="m">123</Button>
                <Button size="xl">123</Button>
                <Button color="greenLight">123</Button>
                <Button color="grey">123</Button>
                <Button color="black">123</Button>
                <Button color="red">123</Button>
                <Typography title="asdasasd" size="xl" bold />
                <Typography text="asdasasd" size="m" />
                <Typography text="asdasasd" size="s" />
                <Typography text="asdasasd" variant="main" />
                <Typography text="asdasasd" variant="second" />
                <Typography text="asdasasd" variant="red" />
                <Typography text="asdasasd" variant="white" />
                <Typography text="asdasasd" variant="black" />
                <Typography text="asdasasd" variant="green" />
                <Accordion list={LIST} />
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
                        <Typography text="aaaaaaaaaaaa" variant="black" />
                    )}
                >
                    <Typography text="asdasasd" variant="black" />
                    <Typography text="asdasasd" variant="black" />
                    <Typography text="asdasasd" variant="black" />
                    <Typography text="asdasasd" variant="black" />
                    <Typography text="asdasasd" variant="black" />
                </Card>
                <InputDrop />
                <Typography text="asdasasd" variant="green" />
                <Typography text="asdasasd" variant="green" />
                <Typography text="asdasasd" variant="green" bold />
                <Toggle onChange={() => setToggle((prev) => !prev)} checked={toggle} />
                <Progress percent={20} />
                <Dropdown trigger="0000" items={[{ content: '123', onClick: () => {}}, { content: '123', onClick: () => {}}]} />
                <SearchField />
                {t('Главная страница')}
                <Counter />
                <LangSwitcher />
                <ThemeSwitcher />
                <p id="work">1111</p>
            </VStack> */}
        </VStack>
    );
};

export default MainPage;
