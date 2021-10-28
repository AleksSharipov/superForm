import FormHeader from '../FormHeader/FormHeader';
import FormContent from '../FormContent/FormContent';
import FormInfo from '../FormInfo/FormInfo';
import FormContacts from '../FormContacts/FormContacts';

import './app.scss';

function App() {

  return (
    <div className="app">
      <form className="form">
        <FormHeader />
        <div className="form__report">
          <p>ЦПХП №1. Суточный рапорт за 25.10.2021.Смена 1. Сменный мастер: </p>
          <input />
        </div>
        <FormContent />
        <FormInfo />
        <FormContacts />

        <button onClick={e => e.preventDefault()} className="btn_save">Сохранить</button>
      </form >
    </div >
  );
}

export default App;