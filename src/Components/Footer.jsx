import React from 'react'

function Footer(props) {
  const {showModal, handleToggleModal, data} = props;
  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className=''></i> {/*info icon */}
      </button>
    </footer>
  )
}

export default Footer