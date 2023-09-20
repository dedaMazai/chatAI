import {
    memo,
    useCallback,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import Upload from '@/shared/assets/icons/Upload.svg';
import { HStack, VStack } from '../Stack';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Text';
import Logo from '@/shared/assets/icons/Logo.svg';

import cls from './InputDrop.module.scss';

interface InputDropProps {
    className?: string;
    onChange?: (value: string | FileList) => void;
    height?: string;
    width?: string;
    countFiles?: number;
    fullWidth?: boolean;
}

export const InputDrop = (props: InputDropProps) => {
    const {
        className,
        onChange,
        countFiles,
        fullWidth,
    } = props;
    const { t } = useTranslation();
    const [drag, setDrag] = useState(false);

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
    };

    const dragStartHandler = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDrag(true);
    }, []);

    const dragLeaveHandler = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDrag(false);
    }, []);

    const onDropHandler = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        onChange?.(e.dataTransfer.files);
    }, [onChange]);

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files) {
            onChange?.(e.target.files);
            setDrag(false);
        }
    }, [onChange]);

    return (
        <label
            className={classNames(cls.StyledInput, mods, [className])}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
        >
            <input
                type="file"
                id="input-field"
                className={cls.fileInput}
                onChange={onChangeHandler}
                accept="image/png, image/jpeg, application/pdf"
            />
            <VStack gap="32" align='center' style={{ pointerEvents: 'none' }}>
                <HStack>
                    <Icon Svg={Logo} className={cls.iconLogo} />
                    <Typography title={t('Chat')} variant="green" bold size='xl' />
                </HStack>
                <HStack gap="8">
                    {!drag && <Icon Svg={Upload} className={cls.icon} />}
                    <Typography
                        text={
                            countFiles
                                ? t('Файл добавлен')
                                : t('Перетащите сюда свой файл')
                        }
                        variant="green"
                        bold
                    />
                </HStack>
            </VStack>
        </label>
    );
};
