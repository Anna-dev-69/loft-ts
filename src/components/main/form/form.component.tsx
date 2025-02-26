import "./form.component.scss";

const Form: React.FC = () => {
  return (
    <form className="Form">
      <h1>Обратная связь</h1>
      <input type="text" placeholder="Имя*" />
      <input type="number" placeholder="Телефон" />
      <input type="email" placeholder="Почта*" />
      <input
        style={{ minHeight: "115px" }}
        type="text"
        placeholder="Комментарий"
      />
      <div className="Form__container-checkbox">
        <input style={{ width: "24px", height: "24px" }} type="checkbox" />

        <div>
          Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты
          и политики конфиденциальности*
        </div>
      </div>
      <button>Отправить</button>
    </form>
  );
};

export default Form;
