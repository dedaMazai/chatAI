import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import IconSms from '@/shared/assets/icons/IconSms.svg';
import { SearchField } from '@/shared/ui/SearchField/SearchField';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useState } from 'react';

import cls from './SearchOnSite.module.scss';

interface SearchOnSiteProps {
    className?: string;
}

export const SearchOnSite = (props: SearchOnSiteProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [state, setState] = useState('');

    return (
        <div className={classNames(cls.SearchOnSite, {}, [className])}>
            <SearchField
                value={state}
                onChange={(value) => setState(value)}
                className={classNames(cls.input, {
                    [cls.openDropMenu]: !!state.length,
                })}
                loading
            />
            <div className={classNames(cls.dropMenu, { [cls.openDropMenu]: !!state.length })}>
                <HStack gap="16">
                    <Icon Svg={IconSms} className={cls.iconSms} />
                    <VStack>
                        <Typography
                            text={t('Chart 1')}
                            bold
                            variant="main"
                        />
                        <Typography
                            text={t('1. Registration Registration ')}
                            variant="gray"
                            size='s'
                        />
                    </VStack>
                </HStack>
            </div>
        </div>
    );
};
