import { Card, Row, Col, Tabs } from "antd";
import React from "react";
import Topwidget from "../../components/Topwidget";
import { FaRegCalendarCheck } from "react-icons/fa";
import AntdTable from "../../components/AntdTable";
import Rectbarchart from "../../components/horibarchart";
import Secondpiechart from "../../components/piechart";
import Horibarchart from "../../components/horibarchart";

const Hello = () => {
  return (
    <h1 className="text-2xl font-bold text-blue-500">
      <Row>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          {" "}
          <Card className="rounded-xl" style={{ background: "#2B7F75" }}>
            <Topwidget
              heading="Total Appoinment"
              value="26,085"
              bg={true}
              trend="inc"
              percentage="32.4%"
              Icon={FaRegCalendarCheck}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          {" "}
          <Card className="rounded-xl border border-gray-300">
            {" "}
            <Topwidget
              heading="Total Appoinment"
              value="26,085"
              textcolor="secondary_widget"
              trend="inc"
              bg={false}
              percentage="32.4%"
              Icon={FaRegCalendarCheck}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          {" "}
          <Card className="rounded-xl border border-gray-300">
            {" "}
            <Topwidget
              heading="Total Appoinment"
              value="26,085"
              textcolor="secondary_widget"
              trend="inc"
              bg={false}
              percentage="32.4%"
              Icon={FaRegCalendarCheck}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          {" "}
          <Card className="rounded-xl border border-gray-300">
            {" "}
            <Topwidget
              heading="Total Appoinment"
              value="26,085"
              textcolor="secondary_widget"
              trend="inc"
              bg={false}
              percentage="32.4%"
              Icon={FaRegCalendarCheck}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className="rounded-xl border border-gray-300">
            <Rectbarchart />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Card className="rounded-xl border border-gray-300">
            <Secondpiechart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Card className="rounded-xl border border-gray-300">
            <Horibarchart />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className="rounded-xl border border-gray-300 table_card">
            <AntdTable />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <Card>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Tab 1" key="1">
                <Rectbarchart />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </h1>
  );
};

export default Hello;
