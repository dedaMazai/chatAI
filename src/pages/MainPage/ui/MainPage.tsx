import { Counter } from '@/entities/Counter';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <VStack max>
            <div>123123123123123123</div>
            {t('Главная страница')}
            <Counter />
            <LangSwitcher />
            <ThemeSwitcher />
        </VStack>
    );
};

export default MainPage;
