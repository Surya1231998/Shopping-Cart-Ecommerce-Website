import React from 'react'

const Footer = () => {
  let footerStyle = {
    position : "relative",
    top : "100vh",
    width : "100%"
  }
  return (
    <div className='bg-dark text-light py-3' style = {footerStyle}>
      <p className="text-center"> Copyright &copy; MyTodoList.com</p>
    
    </div>
  )
}

export default Footer