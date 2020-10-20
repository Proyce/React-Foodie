import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const MenuCard = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const getMenus = async () => {
      const response = await fetch(
        "https://foodbukka.herokuapp.com/api/v1/menu"
      );
      // console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse.Result);
      setMenus(jsonResponse.Result);
    };

    getMenus();
  }, []);

  return (
    <>
      {menus.slice(0, 12).map((menu, index) => {
          return (
            <section className="bukka-card" key={index}>
              <img alt="bukka-card-img" src={menu.images[2]} />
              <section className="bukka-card-text ml-10 mr-10 mt-10 mb-10">
                <h3 className="center mb-10 bukka-card-header">{menu.menuname}</h3>
                <p className="icon-para">
                  <IoMdRestaurant size="1.2rem" className="bukka-icons mr-10 bukka-color"/>
                  {menu.description}
                </p>
                
              </section>
              <a className="bukka-card-button block center" href="/menus">
                View Restaurants
              </a>
             </section>
          );
        })}
    </>
  );
};
export default MenuCard;
