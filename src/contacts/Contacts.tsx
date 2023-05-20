import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contacts}`}>
                <h3 className={style.title}>Контакты</h3>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <button type={'submit'} className={style.buttonSend}>Отправить</button>
                </form>
            </div>
        </div>
    );
};
