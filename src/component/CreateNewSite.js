import React from 'react'

const CreateNew = () => {

  return (
    <>
    <div className='outer-modal'>
        </div>
        <div className='inner-modal'>
      <form>
        <fieldset>
          <legend>Site</legend>
          <input type="text" placeholder='Address Line 1' autofocus required ></input>
          <input type="text" placeholder='Address Line 2' required></input>
          <input type="text" placeholder='Address Line 3 (optional)'></input>
          <input type="text" placeholder='City' className='inline-input' required></input>
          <input type="text" placeholder='Postal Code' className='inline-input' required></input>
          <input type="text" placeholder='Site Code' className='inline-input' required></input>
          <legend>PPM</legend>
          <input type="text" placeholder='Support Role' required></input>
          <select required>
          <option value="" disabled selected>Status</option>
            <option>Enable</option>
            <option>Disable</option>
          </select>
          <input type="text" placeholder='Address Line 1' required></input>
          <select>
          <option value="" disabled selected>Product Cat Tier 1</option>
            <option value="Hard FM">Hard FM</option>
            <option value="Soft FM">Soft FM</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Security">Security</option>
            <option value="Surveillance">Surveillance</option>
            <option value="Hardware">Hardware</option>
            <option value="DisNetworkable">Network</option>
            <option value="Cable Management">Cable Management</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Power systems">Power systems</option>
          </select>
            <input type="text" placeholder='Product Cat Tier 2' required></input>
            <input type="text" placeholder='Product Cat Tier 3' required></input>
          <input type="text" placeholder='PPM Number' required></input>
            <input type="text" placeholder='SC L 1' required></input>
            <input type="text" placeholder='SC L 2' required></input>
            <input type="text" placeholder='SC L 3' required></input>
            <input type="text" placeholder='SC L 4' required></input>
        <button type='submit'>Submit</button>
        </fieldset>
      </form>
      </div>
      </>
  )
}

export default CreateNew