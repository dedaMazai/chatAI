import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import embededCover from '@/shared/assets/img/embeded-chat-cover.webp';
import exampleCover from '@/shared/assets/img/embeded-chat-example-1.webp';
import exampleCover2 from '@/shared/assets/img/embeded-chat-example-1.webp';
import robotIcon from '@/shared/assets/img/robotIcon.webp';
import editIcon from '@/shared/assets/img/editIcon.webp';
import smsIcon from '@/shared/assets/img/smsIcon.webp';
import headIcon from '@/shared/assets/img/headIcon.webp';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

const ProductPage = () => {
    const { t } = useTranslation('');

    return (
        <VStack align='center' gap="64" style={{ width: '1100px' }}>
            <VStack gap="24" max align='center' style={{ width: '800px' }}>
                <Typography
                    size='xl'
                    bold
                    title={t('Внедряйте чат-ботов на свой сайт за считанные секунды')}
                    align='center'
                    wrap
                />
                <Typography
                    size='l'
                    text={t('Используйте возможности искусственного интеллекта и выведите пользовательский интерфейс вашего сайта на новый уровень с помощью наших интерактивных чат-ботов.')}
                    wrap
                    align='center'
                />
            </VStack>
            <img src={embededCover} width={1100} />
            <HStack gap="64" max justify='between'>
                <img src={exampleCover} width={500} />
                <VStack gap="32" align='end'>
                    <VStack gap="8">
                        <Typography
                            size='xl'
                            bold
                            title={t('Полностью настраиваемые чат-боты')}
                            align='right'
                            wrap
                        />
                        <Typography
                            text={t('Благодаря этой функциональности пользователи PandaChat могут легко встраивать чат-ботов в свои собственные веб-сайты, адаптируя интерфейс, тембр голоса и другие важные аспекты в соответствии со своим брендом, визуальной идентичностью или другими конкретными требованиями.')}
                            wrap
                            align='right'
                        />
                    </VStack>
                    <Button
                        color='green'
                        variant='outline'
                        circle
                        size="l"
                        jump
                        onClick={() => {}}
                    >
                        {t('Попробовать')}
                    </Button>
                </VStack>
            </HStack>
            <VStack gap="24" max align='center'>
                <Card variant='blackTwo' padding="8">
                    <Typography
                        size='l'
                        variant="white"
                        text={t('Как это работает')}
                        wrap
                        align='center'
                    />
                </Card>
                <Typography
                    size='xl'
                    bold
                    title={t('Повысьте свою продуктивность уже сегодня')}
                    align='center'
                    wrap
                />
            </VStack>
            <VStack gap="24" max align='center'>
                <HStack gap="24" justify='between'>
                    <Card jump padding='24' variant='greyOne' style={{ width: 500, height: 300 }}>
                        <VStack gap="16" align='start'>
                            <img src={headIcon} height={50} />
                            <Typography size="l" bold text={t('Создание')} />
                            <Typography text={t('Используя данные с вашего веб-сайта, такие как часто задаваемые вопросы, информация о продукте / услуге и соответствующий контент, вы можете создать базу знаний, на которую чат-бот будет опираться при взаимодействии с посетителями.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne' style={{ width: 500, height: 300 }}>
                        <VStack gap="16" align='start'>
                            <img src={editIcon} height={50} />
                            <Typography size="l" bold text={t('Изменение')} />
                            <Typography text={t('Это включает в себя разработку визуальных элементов, таких как цвет и элементы фирменного стиля, чтобы обеспечить плавную интеграцию с общим оформлением вашего веб-сайта. Настройте тон голоса чат-ботов в соответствии со стилем общения вашего бренда.')} />
                        </VStack>
                    </Card>
                </HStack>
                <HStack gap="24" justify='between'>
                    <Card jump padding='24' variant='greyOne' style={{ width: 500, height: 300 }}>
                        <VStack gap="16" align='start'>
                            <img src={robotIcon} height={50} />
                            <Typography size="l" bold text={t('Внедрние')} />
                            <Typography text={t('После настройки чат-бота пришло время встроить его на ваш веб-сайт. Это включает в себя добавление фрагмента кода, указанного в настройках. Разместите код на нужной веб-странице и включите чат-бота, чтобы он начал взаимодействовать с вашими посетителями.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne' style={{ width: 500, height: 300 }}>
                        <VStack gap="16" align='start'>
                            <img src={smsIcon} height={50} />
                            <Typography size="l" bold text={t('Чат')} />
                            <Typography text={t('Как только чат-бот встроен на ваш сайт, он готов к интерактивным беседам с посетителями. Чат-бот выступает в качестве партнера по интерактивному чату с посетителями веб-сайта, предоставляя полезные ответы на их запросы.')} />
                        </VStack>
                    </Card>
                </HStack>
            </VStack>
            <HStack gap="64" max justify='between'>
                <VStack gap="32" align='start'>
                    <VStack gap="8">
                        <Typography
                            size='xl'
                            bold
                            title={t('Интерактивный разговорный инструмент')}
                            align='left'
                            wrap
                        />
                        <Typography
                            text={t('Разработанный для ведения динамичных бесед с пользователями, использующий данные с веб-сайта для предоставления актуальной и точной информации. Благодаря интеграции с контентом веб-сайта, таким как предлагаемые услуги или продукты, чат-бот становится ценным ресурсом для пользователей, ищущих информацию.')}
                            wrap
                            align='left'
                        />
                    </VStack>
                    <Button
                        color='green'
                        variant='outline'
                        circle
                        size="l"
                        jump
                        onClick={() => {}}
                    >
                        {t('Попробовать')}
                    </Button>
                </VStack>
                <img src={exampleCover2} width={500} />
            </HStack>
            <HStack max justify='center'>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/RlwFqc7gS7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </HStack>
        </VStack>
    );
};

export default ProductPage;
