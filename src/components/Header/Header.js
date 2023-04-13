import React from 'react'

export default function Header() {
  return (
    <div className='header mb-5'>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
        <label class="form-check-label" for="flexSwitchCheckChecked">Switch theme</label>
      </div>
    </div>
  )
}
