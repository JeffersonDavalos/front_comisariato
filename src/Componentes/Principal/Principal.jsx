import React, { useState } from 'react';
import { Layout, Card, Row, Col, Typography } from 'antd';
import MigajasdePan from './MigajasdePan';
import MenuLateral from './MenuLateral';
import MenuSuperior from './MenuSuperior';

const { Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

const Principal = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <MenuLateral collapsed={collapsed} />
      </Sider>
      <Layout>
        <MenuSuperior />
        <Content style={{ margin: '16px' }}>
          <Row className="mb-2">
            <Col span={24}>
              <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Comisariato del Constructor</h1>
              <MigajasdePan paginas={[{ nombre: 'Comisariato del Constructor', ruta: '' }]} />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false}>
                <Title level={3}>¿Qué es Comisariato del Constructor?</Title>
                <Paragraph>
                  Comisariato del Constructor es una empresa dedicada a ofrecer productos y servicios especializados para el sector de la construcción. Con una amplia experiencia en el mercado, se ha consolidado como líder en la distribución de materiales de construcción de alta calidad. Nuestro objetivo es satisfacer las necesidades de los profesionales del sector, ofreciendo un catálogo completo y un servicio al cliente excepcional.
                </Paragraph>
              </Card>
            </Col>
              <Row gutter={16}>
                <Col span={12}>
                  <Card bordered={false} style={{ backgroundColor: '#f8d0a3', padding: '24px', textAlign: 'center' }}>
                    <Title level={3} style={{ fontWeight: 'bold', color: '#E84A2B' }}>Misión</Title>
                    <Paragraph style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      BRINDAR VALOR A NUESTROS CLIENTES Y SOCIOS,
                    </Paragraph>
                    <Paragraph style={{ fontSize: '14px' }}>
                      como el medio más completo en el sector de la construcción para lograr un crecimiento comercial rentable y, a su vez, contribuir al bienestar de la comunidad en la que operamos.
                    </Paragraph>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card bordered={false} style={{ backgroundColor: '#f8d0a3', padding: '24px', textAlign: 'center' }}>
                    <Title level={3} style={{ fontWeight: 'bold', color: '#E84A2B' }}>Visión</Title>
                    <Paragraph style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      CONSOLIDARNOS COMO UNA ORGANIZACIÓN CON PROYECCIÓN INTERNACIONAL,
                    </Paragraph>
                    <Paragraph style={{ fontSize: '14px' }}>
                      socialmente responsable, orientada al cliente, que busque siempre ser su primera opción al adquirir productos y servicios para materiales de construcción.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Principal;
