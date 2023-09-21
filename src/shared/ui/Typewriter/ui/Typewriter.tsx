import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Typewriter.module.scss';
import { useEffect, useState } from 'react';
import { Typography } from '../../Text';

interface TypewriterProps {
    className?: string;
    text: string;
    delay: number;
    infinite?: boolean;
}

export const Typewriter = ({ text, delay, infinite }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (infinite) {
            // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <Typography text={currentText} />;
};
