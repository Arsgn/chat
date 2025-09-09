'use client'
import { FC } from 'react';
import scss from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <section className={scss.Footer}>
            <div className='container'>
                <div className={scss.content}>Footer</div>
            </div>
        </section>
    );
};
