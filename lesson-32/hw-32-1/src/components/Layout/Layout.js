import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { logout } from "../../store/slices/userSlices";

import {Layout, Button, Menu, Switch, Row, Col, Dropdown, Space, Typography} from "antd";
import {
    MoonOutlined,
    SunOutlined,
    LogoutOutlined,
    DownOutlined,
    GithubOutlined,
    LinkedinOutlined, MailOutlined
} from "@ant-design/icons";
import "./Layout.scss";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export default function LayoutComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = useSelector(state => state.user.isLogin);
    const selectedKey = isLogin ? location.pathname : "/login";

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const menuItems = [
        {
            key: "/",
            label: <NavLink to="/">Резюме</NavLink>,
        },
        {
            key: "/todo",
            label: <NavLink to="/todo">To Do</NavLink>,
        },
    ];

    const dropdownItems = [
        {
            key: "/registration",
            label: <NavLink to="/registration">Реєстрація</NavLink>,
        },
        {
            key: "/login",
            label: <NavLink to="/login">Логін</NavLink>,
        },
    ];

    if (!isLogin) {
        menuItems.push({
            key: "dropdown",
            label: (
                <Dropdown menu={{ items: dropdownItems }}>
                    <Space>
                        Обліковий запис
                        <DownOutlined />
                    </Space>
                </Dropdown>
            ),
        });
    }

    return (
        <Layout className={`layout layout-${theme}`}>
            <Header className={`header header-${theme}`} style={{ padding: "0 20px" }}>
                <div className="header-container">
                    <Row align="middle" justify="space-between" style={{ width: "100%" }}>
                        <Col flex="1">
                            <Menu
                                mode="horizontal"
                                theme={theme === "light" ? "light" : "dark"}
                                selectedKeys={[selectedKey]}
                                items={menuItems}
                            />
                        </Col>

                        <Col>
                            <Row align="middle" gutter={16} className="header-right">
                                <Col>
                                    <Switch
                                        checkedChildren={<SunOutlined />}
                                        unCheckedChildren={<MoonOutlined />}
                                        checked={theme === "light"}
                                        onChange={toggleTheme}
                                        style={{ width: "50px" }}
                                    />
                                </Col>
                                {isLogin && (
                                    <Col>
                                        <Button
                                            type="primary"
                                            danger
                                            icon={<LogoutOutlined />}
                                            onClick={handleLogout}
                                        >
                                            Вихід
                                        </Button>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Header>
            <Content className={`content content-${theme}`}>
                <Outlet />
            </Content>
            <Footer className="footer" >
                <Row justify="center" gutter={[16, 16]}>
                    <Col>
                        <Text strong>© 2025 Artem Ryzhenko</Text>
                    </Col>
                    <Col>
                        <Space size="large">
                            <Link href="mailto:artem@ryzhenko.com" target="_blank">
                                <MailOutlined /> Email
                            </Link>
                            <Link href="https://linkedin.com/in/artem-ryzhenko" target="_blank">
                                <LinkedinOutlined /> LinkedIn
                            </Link>
                            <Link href="https://github.com/PlayMouse" target="_blank">
                                <GithubOutlined /> GitHub
                            </Link>
                        </Space>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
}
