import { Link, useNavigate } from 'react-router-dom';
import { useButtonStyles } from './button.style';
import { getToken } from 'core/helpers/get-token';
import { Dropdown, DropdownProps, MenuProps, Space } from 'antd';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'store/store';
import { environment } from 'core/configs/app.config';
import { setUser } from 'store/store.reducer';
import { Routes } from 'router/routes';

const ButtonComponent = ({ text, className, url }) => {
  const classes = useButtonStyles();
  const token = getToken();
  const user = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '3') {
      navigate(Routes.home);
      setOpen(false);
      localStorage.removeItem(`${environment.applicationName}-token`);
      dispatch(setUser(null));
    }
    if(e.key === '2') {
      navigate(Routes.personal);
    }
  };

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const items: MenuProps['items'] = [
    {
      label: 'Cards',
      key: '1',
    },
    {
      label: 'Personal İnformations',
      key: '2',
    },
    {
      label: 'Çıxış',
      key: '3',
    },
  ];
  return (
    <>
      {token ? (
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          onOpenChange={handleOpenChange}
          open={open}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className={classes.textStyle}>
              {user && user.name && user.surname
                ? `${user.name} ${user.surname}`
                : ''}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      ) : (
        <Link to={url} className={`${classes[className]}`}>
          {text}
        </Link>
      )}
    </>
  );
};
export default ButtonComponent;
