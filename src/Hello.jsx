import { Card, Row, Col } from "antd";
import React from "react";
import Topwidget from "./components/Topwidget";
import { FaRegCalendarCheck } from "react-icons/fa";
import Rectbarchart from "./charts/rectbarchart";
import Secondpiechart from "./charts/piechart";
import Horibarchart from "./charts/horibarchart";

const Hello = () => {
  return (
    <h1 className="text-2xl font-bold text-blue-500">
      <Row>
        <Col span={6}>
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
        <Col span={6}>
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
        <Col span={6}>
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
        <Col span={6}>
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
        <Col span={12}>
          <Card className="rounded-xl border border-gray-300">
            <Secondpiechart />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="rounded-xl border border-gray-300">
            <Horibarchart />
          </Card>
        </Col>
      </Row>
    </h1>
  );
};

export default Hello;
