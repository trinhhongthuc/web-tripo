import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import menuHeader from '../../configs/menuHeader';
import routes from '../../configs/router';
import './header.scss';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>('home');
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <Link to={routes.home}>Tripo game</Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__ul">
            {/* Kiểm tra menu đa cấp */}
            {menuHeader.map((item, i) => {
              if (item.children) {
                return (
                  <li
                    className={`header__nav__ul__parent-children ${
                      activeMenu === item.active && 'active'
                    }`}
                    key={i}
                    onClick={() =>
                      setActiveMenu(
                        item.active !== undefined ? item.active : 'home'
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <ul className="submenu">
                      {item.children.map((itemChildren, index) => (
                        <li key={index}>
                          <Link to={itemChildren.path}>
                            {itemChildren.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else
                return (
                  <li
                    className={`header__nav__ul__parent-menu ${
                      activeMenu === item.active && 'active'
                    }`}
                    key={i}
                    onClick={() =>
                      setActiveMenu(
                        item.active !== undefined ? item.active : 'home'
                      )
                    }
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);
