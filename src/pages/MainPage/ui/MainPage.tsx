import { HorizontalCarousel } from '@/entities/HorizontalCarousel';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
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
import businessCover from '@/shared/assets/img/pandachat-business-cover.webp';
import YouTube from '@/shared/assets/icons/YouTube.svg';
import Jira from '@/shared/assets/icons/Jira.svg';
import Mp3 from '@/shared/assets/icons/Mp3.svg';
import Webpage from '@/shared/assets/icons/Webpage.svg';
import Wikipedia from '@/shared/assets/icons/Wikipedia.svg';
import Github from '@/shared/assets/icons/Github.svg';
import Google from '@/shared/assets/icons/Google.svg';
import Slack from '@/shared/assets/icons/Slack.svg';
import Discord from '@/shared/assets/icons/Discord.svg';
import Caltech from '@/shared/assets/icons/Caltech.svg';
import Cambridge from '@/shared/assets/icons/Cambridge.svg';
import Harvard from '@/shared/assets/icons/Harvard.svg';
import Insta from '@/shared/assets/icons/Insta.svg';
import Meta from '@/shared/assets/icons/Meta.svg';
import Oxford from '@/shared/assets/icons/Oxford.svg';
import { AppCard } from '@/entities/AppCard/AppCard';
import { Footer } from '@/widgets/Footer';

const MainPage = () => {
    const { t } = useTranslation();
    const [activeButton, setActiveButton] = useState('Образование');

    return (
        <VStack align='center' gap="64" max>
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
                    <Card jump padding='24' variant='greyOne'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Загружайте любые данные за секунды')} />
                            <Typography text={t('Безопасно загружайте все, что угодно, из PowerPoints, документов Word, Excel, изображений, веб-сайтов в PDF-файлы или просматривайте весь веб-сайт целиком. Panda, которая будет искать ваши данные и использовать их для выработки разумных ответов.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne'>
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
                <VStack gap="16">
                    <HStack gap="16">
                        <AppCard
                            Svg={YouTube}
                            active
                            text={t('YouTube')}
                        />
                        <AppCard
                            Svg={Jira}
                            active
                            text={t('Jira')}
                        />
                        <AppCard
                            Svg={Mp3}
                            active
                            text={t('MP3')}
                        />
                    </HStack>
                    <HStack gap="16">
                        <AppCard
                            Svg={Webpage}
                            active
                            text={t('Webpage')}
                        />
                        <AppCard
                            Svg={Wikipedia}
                            active
                            text={t('Wikipedia')}
                        />
                        <AppCard
                            Svg={Github}
                            text={t('Github')}
                        />
                    </HStack>
                    <HStack gap="16">
                        <AppCard
                            Svg={Google}
                            text={t('Google')}
                        />
                        <AppCard
                            Svg={Slack}
                            text={t('Slack')}
                        />
                        <AppCard
                            Svg={Discord}
                            text={t('Discord')}
                        />
                    </HStack>
                </VStack>
                <VStack max align='end'>
                    <Typography
                        size='l'
                        align="right"
                        text={t('Особенности')}
                        wrap
                    />
                    <Typography
                        size='xl'
                        align="right"
                        title={t('Создайте чат-бота, работающего на базе искусственного интеллекта и обученного с использованием ваших данных')}
                        bold
                        wrap
                    />
                </VStack>
                <HStack max gap="32" justify='center'>
                    <Card jump padding='24' variant='greyOne' width='50%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Целевые результаты поиска')} />
                            <Typography text={t('Благодаря сложным методам поиска платформа генерирует точные результаты поиска, гарантируя, что пользователи смогут легко и быстро найти нужную им информацию. Это особенно полезно при поиске в длинных документах или попытке найти конкретные детали.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne' width='50%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Обработка естественного языка')} />
                            <Typography text={t('Наша платформа использует алгоритмы, основанные на NLP, позволяя пользователям задавать вопросы на естественном языке, точно так же, как они задавали бы их другому человеку. Система распознает тонкости языка, контекста и намерений, предоставляя быстрые и точные ответы.')} />
                        </VStack>
                    </Card>
                </HStack>
                <HStack max gap="32" justify='center'>
                    <Card jump padding='24' variant='greyOne' width='50%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Синтаксический анализ документа')} />
                            <Typography text={t('Наша платформа использует искусственный интеллект для интеллектуальной обработки любого загруженного документа, извлечения важной информации и понимания контекста, что облегчает пользователям поиск и задавание вопросов.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne' width='50%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Multi-Format Compatibility')} />
                            <Typography text={t('Our platform provides comprehensive support for various file formats, including PDFs, Word documents, and images, enabling users to upload any document or image and receive relevant information based on the content.')} />
                        </VStack>
                    </Card>
                </HStack>
            </VStack>
            <HorizontalCarousel />
            <VStack align='center' gap="64" max style={{ width: '1100px', paddingBottom: '2rem' }}>
                <VStack max gap="16" align='center'>
                    <Typography
                        size='xl'
                        bold
                        align="center"
                        title={t('Пользуются доверием исследователей, академических кругов и ведущих отраслей промышленности')}
                        wrap
                    />
                    <Typography
                        size='l'
                        align="center"
                        text={t('Новаторы и студенты из ведущих университетов и организаций мира используют Ai Chat')}
                        wrap
                    />
                    <HStack gap="32">
                        <Icon height={70} width={120} Svg={Caltech} />
                        <Icon height={70} width={150} Svg={Cambridge} />
                        <Icon height={70} width={150} Svg={Harvard} />
                        <Icon height={70} width={150} Svg={Insta} />
                        <Icon height={70} width={120} Svg={Meta} />
                        <Icon height={70} width={150} Svg={Oxford} />
                    </HStack>
                </VStack>
            </VStack>
            <VStack max align='center' style={{ background: 'black', padding: '4rem 0' }}>
                <VStack gap="64" style={{ width: '1100px' }}>
                    {/* <Card jump variant="blackTwo" padding="54">
                        <HStack gap="16" align='start'>
                            <VStack gap="16">
                                <HStack gap="8">
                                    <Typography
                                        size='xl'
                                        bold
                                        variant="white"
                                        title={t('AiChat')}
                                        wrap
                                    />
                                    <Card variant='greyTwo'>
                                        <Typography
                                            text={t('Чат')}
                                        />
                                    </Card>
                                </HStack>
                                <Typography
                                    variant="white"
                                    size='m'
                                    text={t('GPT, который повысит эффективность вашего бизнеса. В отличие от других чат-платформ, Panda Chan специально разработана для установки у вас дома, что дает вам полный контроль над вашими данными.')}
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
                    </Card> */}
                    <Card jump variant="blackTwo" padding="54">
                        <HStack gap="64" align='start'>
                            <VStack gap="16">
                                <HStack gap="16">
                                    <Typography
                                        size='xl'
                                        bold
                                        variant="white"
                                        title={t('AiChat')}
                                        wrap
                                    />
                                    <Card variant='black'>
                                        <Typography
                                            variant="green"
                                            text={t('Бизнес')}
                                        />
                                    </Card>
                                </HStack>
                                <Typography
                                    variant="white"
                                    size='m'
                                    text={t('GPT, который повысит эффективность вашего бизнеса. В отличие от других чат-платформ, Panda Chan специально разработана для установки у вас дома, что дает вам полный контроль над вашими данными.')}
                                    wrap
                                />
                                <Typography
                                    variant="white"
                                    size='m'
                                    text={t('Наша миссия состоит в том, чтобы повысить эффективность вашей команды с помощью безопасной и быстрой коммуникации. Обмен сообщениями в режиме реального времени позволяет быстро принимать решения, делая вашу команду более гибкой и отзывчивой, чем когда-либо прежде.')}
                                    wrap
                                />
                                <Button
                                    color='green'
                                    circle
                                    jump
                                    onClick={() => {}}
                                >
                                    {t('Посетить сайт')}
                                </Button>
                            </VStack>
                            <img height={400} width={400} src={businessCover} />
                        </HStack>
                    </Card>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default MainPage;
