// import Sidebar from './common/components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const MenuCurencyPage = () => {
  const menuItems = [
    {
      id: '1',
      name: 'Home',
      //   icon: <HiBookOpen />,
      path: '/',
    },
    {
      id: '2',
      name: 'Statistics',
      //   icon: <HiAcademicCap />,
      path: '/faculties',
    },
    // {
    //   id: '3',
    //   name: 'Login',
    //   path: '/login',
    // },
  ];

  return (
    <ColorContext.Provider value={color}>
      <main className="App">
        <div className={styles.sidebar}>
          <div className={styles.sidebarBrandBox}></div>
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    [styles.navLink, isActive ? styles.navLinkActive : ''].join(
                      ''
                    )
                  }
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <section className="container">
          <Suspense>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </ColorContext.Provider>
  );
};

export default MenuCurencyPage;
