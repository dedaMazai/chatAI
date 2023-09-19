import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import Logo from '@/shared/assets/icons/Logo.svg';
import Upload from '@/shared/assets/icons/Upload.svg';
import SmsSingle from '@/shared/assets/icons/SmsSingle.svg';
import Edit from '@/shared/assets/icons/Edit.svg';

import cls from './Sidebar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface SidebarProps {
    className?: string;
}

const CHATS = ['Chat#1', 'Chat#2', 'Chat#3', 'Chat#4']

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();

    const onToggle = () => {
        console.log(collapsed);
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <HStack>
                <Icon Svg={Logo} className={cls.iconLogo} />
                <Typography text={t('Chat')} variant="green" bold size='l' />
            </HStack>
            <Button
                color='green'
                fullWidth
                bold
                onClick={() => {}}
            >
                <HStack max gap="8" justify="center">
                    <Icon Svg={Upload} className={cls.upload} />
                    {t('Новый чат')}
                </HStack>
            </Button>
            <VStack gap="8" max>
                <Typography text={t('Chats')} />
                <div className={cls.list}>
                    {CHATS.map((chat) => (
                        <HStack gap="2" max>
                            <Button
                                variant="clearGrey"
                                fullWidth
                            >
                                <HStack gap="8">
                                    <Icon Svg={SmsSingle} className={cls.smsSingle} />
                                    <Typography text={chat} />
                                </HStack>
                            </Button>
                            <Button
                                fullHeight
                                variant="clearGreen"
                            >
                                <Icon Svg={Edit} className={cls.editIcon} />
                            </Button>
                        </HStack>
                    ))}
                </div>
            </VStack>
            {/* <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
            /> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
