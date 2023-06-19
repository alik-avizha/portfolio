import React from 'react';
import style from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade direction={'left'}>
                <div className={style.container}>
                    <Title text={'Contacts'}/>
                    <form className={style.form}>
                        <input placeholder={'name'} type="text"/>
                        <input placeholder={'e-mail'} type="text"/>
                        <textarea placeholder={'your message'}/>
                        <button type={'submit'} className={style.buttonSend}>Отправить</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};
