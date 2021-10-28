import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './formInfo.scss';

export default function FormInfo() {

  const [valComment, setValComment] = useState('');
  const [valInput1, setInput1] = useState('');

  const { items } = useSelector(({ data }) => {
    if (data.items !== null) {
      // console.log(data)
      return data
    }
  });

  // const inp1 = items.shipment[0].input1;

  // console.log(items.shipment[0].input1)

  return (
    <div className="form__info" >
      <div className="form__info_grid">
        <div className="item-0"><h2>Общая информация</h2></div>
        <div className="item-1"><p>Отгрузка готового продукта</p></div>
        <div className="item-2"><p>Продукт</p></div>
        <div className="item-3"><p>№ цистерн/ж.д. ваг.</p></div>
        <div className="item-4"><p>Назначение</p></div>
        <div className="item-5"><p>Шт/Тонны</p></div>
        {/* Первая строка. начало */}
        {
          items.shipment !== undefined ? items.shipment[0].input1.map(el => {
            console.log(el.key)
            return (
              <div key={el.key} className={el.item}>
                <input
                  value={el.data || 0}
                  onChange={(e) => {
                    el.data = e.target.value;
                    setInput1(e.target.value)
                  }}
                />
              </div>
            )
          }) :
            <>
              <div className="item-6"><input /></div>
              <div className="item-7"><input /></div>
              <div className="item-8"><input /></div>
              <div className="item-9"><input /></div>
            </>
        }
        {/* <div className="item-6"><input /></div>
        <div className="item-7"><input /></div>
        <div className="item-8"><input /></div>
        <div className="item-9"><input /></div> */}
        {/* Первая строка. Конец */}
        <div className="item-10"><input /></div>
        <div className="item-11"><input /></div>
        <div className="item-12"><input /></div>
        <div className="item-13"><input /></div>
        <div className="item-14"><input /></div>
        <div className="item-15"><input /></div>
        <div className="item-16"><input /></div>
        <div className="item-17"><input /></div>
        <div className="item-18"><input /></div>
        <div className="item-19"><input /></div>
        <div className="item-20"><input /></div>
        <div className="item-21"><input /></div>
        <div className="item-22"><input /></div>
        <div className="item-23"><input /></div>
        <div className="item-24"><input /></div>
        <div className="item-25"><input /></div>
        <div className="item-26"><input /></div>
        <div className="item-27"><input /></div>
        <div className="item-28"><input /></div>
        <div className="item-29"><input /></div>
        <div className="item-30"><input /></div>
        <div className="item-31"><input /></div>
        <div className="item-32"><input /></div>
        <div className="item-33"><input /></div>
        <div className="item-34"><p>Время Обработки цеха службами УТ</p></div>
        <div className="item-35"><p>УРСБ</p></div>
        <div className="item-36"><input /></div>
        <div className="item-37"><p>Химия</p></div>
        <div className="item-38"><input /></div>
        <div className="item-39"><p>Замечания по работе цеха</p></div>
        <div className="item-40">
          <textarea
            onChange={(e) => {
              items.comment = e.target.value;
              setValComment(e.target.value)
            }}
            value={items.comment || ''} /></div>
      </div>
    </div >
  )
}
