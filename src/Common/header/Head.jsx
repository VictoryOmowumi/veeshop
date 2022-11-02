import React from 'react'

const Head = () => {
  return (
   <section className="head">
    <div className="container d_flex">
        <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+234 803 456 7890</label>
            <i className="fa fa-envelope"></i>
            <label>vee_shop@gmail.com </label>
        </div>
        <div className="right row RText">
            <label >FAQ</label>
            <label >Need Help</label>
            <span><i className="fa fa-language"></i> </span>
            <label >EN</label>
            <span>💵</span>
            <label >USD</label>
        </div>
    </div>
   </section>
  )
}

export default Head