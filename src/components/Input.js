
import React, {useState} from 'react'; /* STEP 0 */

export default function Input() {
  /* STEP 1 */
  const [inputValue, setInputValue] = useState("")

  const changeInput = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;

    /* STEP 4 */
    setInputValue(value)
  };
  const reset = () => {
    /* STEP 5 */
    setInputValue("")
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputValue.length > 10 ? 'crimson' : 'royalblue', /* STEP 2 */
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}>{`${inputValue.toUpperCase()}`}</div> {/* STEP 3 */}
      <div>
      <input value={inputValue} id='input' type='text' onChange={changeInput} /> {/* STEP 6 */}
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
