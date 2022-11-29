import React from 'react'

const CreateNewPPM = () => {
  return (
    <>
    <div className='outer-modal'>
        </div>
        <div className='inner-modal'>
      <form>
        <fieldset>
          <legend>PPM</legend>
          <input type="text" placeholder='PPM Number' autofocus required ></input>
          <input type="text" placeholder='Support level' required></input>
          <input type="number" placeholder='Frequency'></input>
          <select>
          <option value="" disabled selected>Status</option>
            <option>Enable</option>
            <option>Disable</option>
          </select>
          <input type="text" placeholder='Product Cat Tier 1' className='inline-input' required></input>
          <input type="text" placeholder='Product Cat Tier 2' className='inline-input' required></input>
          <input type="text" placeholder='Product Cat Tier 3' className='inline-input' required></input>
          <input type="text" placeholder='Support Role' required></input>
          
        <button type='submit'>Submit</button>
        </fieldset>
      </form>
      </div>
      </>
  )
}

export default CreateNewPPM