import React from 'react';
import './formContacts.scss';

export default function FormContacts() {
  return (
    <div className="form__contacts">
      <div className="item-0"><p>Выполнено за смену</p></div>
      <div className="item-1"><textarea /></div>
      <div className="item-2"><p>Смену сдал</p></div>
      <div className="item-3"><input /></div>
      <div className="item-4"><p>Смену принял</p></div>
      <div className="item-5"><input /></div>
      <div className="item-6"><p>Начальник цеха</p></div>
      <div className="item-7"><input /></div>
    </div>
  )
}
