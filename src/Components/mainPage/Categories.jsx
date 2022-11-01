import React from 'react'
const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Fashion",
        },
        // {
        //     cateImg: "./images/category/cat2.jpg",
        //     cateName: "Electronics",
        // },
      ]
  return (
    <>
      <div className="category">
        {
          data.map((item, index) => {
            return (
              <div className="box f_flex" key={index}>
                <img src={item.cateImg} alt="cloths" />
                <span>{item.cateName}</span>
              </div>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default Categories