import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, ReconciliationOutlined } from '@ant-design/icons';

const MenuLateral = ({ collapsed }) => {
  const menuItems = [
    {
      key: 'usuarios',
      icon: <UserOutlined />,
      label: 'Usuarios',
      children: [
        {
          key: 'usuarioActualizar',
          label: <Link to="/actualizar-usuario">Actualizar Usuario</Link>,
        },
      ],
    },
  ];

  return (
    <div style={{ height: '100%' }}>
      <div
        style={{
          padding: '0 16px',
          textAlign: 'center',
          backgroundColor: '#fff',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={collapsed ? require('../Imagenes/logo.png') : require('../Imagenes/logo2.png')}
          alt="Logo"
          style={{
            height: '100%',
            maxHeight: '45px',
            width: 'auto',
            transition: 'width 0.2s ease-in-out',
          }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: '100%', transition: 'all 0.2s ease-in-out' }}
        items={menuItems}
      />
    </div>
  );
};

export default MenuLateral;
