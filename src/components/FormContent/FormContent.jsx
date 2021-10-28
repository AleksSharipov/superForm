import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './formContent.scss'

export default function FormContent() {

  const [val, setVal] = useState('')

  const { items } = useSelector(({ data }) => {
    if (data.items !== null) {
      // console.log(data)
      return data
    }
  });


  return (
    <div className="form__content">
      <div className="form__content_grid">
        <div className="item-0"><h2>Первичное охлаждение&nbsp;и машинный&nbsp;зал</h2></div>
        <div className="item-1">ПГХ</div>
        <div className="item-2"><p>1</p></div>
        <div className="item-3">2</div>
        <div className="item-4">3</div>
        <div className="item-5">4</div>
        <div className="item-6">5</div>
        <div className="item-7">6</div>
        <div className="item-8"><p>t газа после ПГХ,&nbsp;&deg;С</p></div>
        {
          items.temperature !== undefined ? items.temperature.map((el) => {
            // console.log(el)
            return (
              <div key={el.item} className={el.item}>
                <input
                  value={el.temperature || 0}
                  onChange={(e) => {

                    el.temperature = +e.target.value;
                    // без setState нет ререндера. реакт не понимает что было обновление.
                    setVal(e.target.value)
                  }}
                />
              </div>
            )
          }) : (
            <>
              <div className="item-9"> <input /> </div>
              <div className="item-10"> <input /> </div>
              <div className="item-11"> <input /> </div>
              <div className="item-12"> <input /> </div>
              <div className="item-13"> <input /> </div>
              <div className="item-14"> <input /> </div>
            </>
          )
        }
        {/* <div className="item-9"> <input /> </div>
        <div className="item-10"> <input /> </div>
        <div className="item-11"> <input /> </div>
        <div className="item-12"> <input /> </div>
        <div className="item-13"> <input /> </div>
        <div className="item-14"> <input /> </div> */}
        <div className="item-15"><p>ПГХ расход воды на первич. охл&nbsp;-&nbsp;е,м/ч</p></div>
        <div className="item-16"><p><input /> / <input /></p></div>
        <div className="item-17"><p>ПГХ t воды на первич. охл-е, &deg;C</p></div>
        <div className="item-18"><input /></div>
        <div className="item-19"><p>Давление газа после эксгаустеров, мм.вод.ст</p></div>
        <div className="item-20"><input /></div>
        <div className="item-21"><input /></div>
        <div className="item-22"><input /></div>
        <div className="item-23"><input /></div>
        <div className="item-24"><p>ПГХ t воды после первич. охл&nbsp;-&nbsp;я, &deg;C</p></div>
        <div className="item-25"><input /></div>
        <div className="item-26"><p>Сопротивление ПГХ</p></div>
        <div className="item-27"><input /></div>
        <div className="item-28"><input /></div>
        <div className="item-29"><p>Сопротивление газопровода</p></div>
        <div className="item-30"><input /></div>
        <div className="item-31"><input /></div>
        <div className="item-32">&nbsp;</div>
        <div className="item-33">&nbsp;</div>
      </div>
    </div>
  )
}
