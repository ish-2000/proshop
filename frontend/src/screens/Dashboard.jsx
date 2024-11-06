import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Tabs,
  List,
  Avatar,
  Space,
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const orders = [
  { id: 1, product: "Product A", status: "Delivered" },
  { id: 2, product: "Product B", status: "Pending" },
];

const wishlist = [
  { id: 1, product: "Wishlist Item A" },
  { id: 2, product: "Wishlist Item B" },
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <Title level={2}>Customer Dashboard</Title>
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Card title="Profile Info">
            <Text strong>Name: </Text> Test data <br />
            <Text strong>Email: </Text> Test data
            <br />
            <Button type="primary" className="mt-2">
              Edit Profile
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <HistoryOutlined /> Orders
                  </span>
                }
                key="1"
              >
                <List
                  itemLayout="horizontal"
                  dataSource={orders}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Text strong>{item.product}</Text>}
                        description={<Text>Status: {item.status}</Text>}
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <HeartOutlined /> Wishlist
                  </span>
                }
                key="2"
              >
                <List
                  itemLayout="horizontal"
                  dataSource={wishlist}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Text strong>{item.product}</Text>}
                      />
                      <Button type="link" danger>
                        Remove
                      </Button>
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <ShoppingCartOutlined /> Cart
                  </span>
                }
                key="3"
              >
                <Text>Your cart is empty.</Text>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
