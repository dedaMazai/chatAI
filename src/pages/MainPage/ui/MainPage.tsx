import { Counter } from '@/entities/Counter';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Page } from '@/shared/layouts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <div>123123123123123123</div>
            {t('Главная страница')}
            <Counter />
            <LangSwitcher />
            <ThemeSwitcher />
        </Page>
    );
};

export default MainPage;
