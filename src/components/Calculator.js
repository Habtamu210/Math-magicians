import Buttons from './button';
import buttondata from './buttondata';

const Calculator = () => {
  const Button = buttondata
    .map((btn) => (
      <Buttons
        key={btn.id}
        val={btn.value}
      />
    ));
  return (
    <div className="calc">
      <div className="display"><span>0</span></div>
      <div className="btns">
        {Button}
      </div>
    </div>
  );
};

export default Calculator;
