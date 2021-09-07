

import React, {useState} from 'react'; /* STEP 0 */

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  /* STEP 1 */
  const [mood, setMood] = useState(initialMood)

  const makeHappy = () => {
    /* STEP 4 */
    setMood(happyMood)
  };
  const makeSad = () => {
    /* STEP 5 */
    setMood(sadMood)
  };
  const reset = () => {
    /* STEP 6 */
    setMood(initialMood)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood === "Quite happy!" ? 'royalblue' : 'crimson', /* STEP 2 */
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
