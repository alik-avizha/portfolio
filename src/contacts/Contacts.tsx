import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contacts}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input placeholder={'name'} type="text"/>
                    <input placeholder={'e-mail'} type="text"/>
                    <textarea placeholder={'your message'} />
                    <button type={'submit'} className={style.buttonSend}>Отправить</button>
                </form>
            </div>
        </div>
    );
};
