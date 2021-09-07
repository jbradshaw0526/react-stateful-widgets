

import React, {useState} from 'react'; /* STEP 0 */

export default function Spinner() {
/* STEP 1 */
const [spinnerOn, setSpinnerOn] = useState(true)

  const toggleSpinner = () => {
  /* STEP 4 */
  setSpinnerOn(!spinnerOn)
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
         spinnerOn && <div id='spinner' className='spinner'>--+--</div> /* STEP 2 */
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
      {spinnerOn ? "Hide spinner" : "Show spinner"} {/* STEP 3 */}
      </button>
    </div>
  );
}
