import React from 'react'

function SideBar(props) {
  const {handleToggleModal, data} = props;
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModal} className='bgOverlay'></div>
      <div className='sidebarContent'>
        <h2>{data?.title}</h2>
        <div>
          <p className='descriptionTitle'>Description</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i>right arrow</i>
        </button>
      </div>
    </div>
  )
}

export default SideBar