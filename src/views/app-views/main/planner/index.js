import React, { useState } from "react"
import Draggable from "react-draggable"
import { Row, Col, Card, Image } from "antd"
import PlannerData from "assets/data/planner.data.json"
import PlannerImage from "../planner-image"

const Planner = () => {
  const [key, setKey] = useState("tables")
  const [noTitleKey, setNoTitleKey] = useState("tables")
  const contentListNoTitle = {
    tables: PlannerData?.filter((e) => e.group === "tables").map((e, idx) => (
      <PlannerImage key={idx} e={e} />
    )),
    chairs: PlannerData?.filter((e) => e.group === "chairs").map((e, idx) => (
      <PlannerImage key={idx} e={e} />
    )),
    sofas: PlannerData?.filter((e) => e.group === "sofas").map((e, idx) => (
      <PlannerImage key={idx} e={e} />
    )),
  }
  const tabListNoTitle = [
    {
      key: "tables",
      tab: "Столы",
    },
    {
      key: "chairs",
      tab: "Стулья",
    },
    {
      key: "sofas",
      tab: "Диваны",
    },
  ]
  const onTabChange = (key) => {
    setKey(key)
    setNoTitleKey(key)
  }
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Card
            tabList={tabListNoTitle}
            activeTabKey={noTitleKey}
            onTabChange={(key) => {
              onTabChange(key)
            }}
          >
            <Row gutter={16}>{contentListNoTitle[key]}</Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Карта заведения">
            <div style={{ height: "1000px" }}>
              <Draggable bounds="parent">
                <Image
                  src="/img/thumbs/table.png"
                  preview={false}
                  height={100}
                  style={{
                    userSelect: "none",
                  }}
                />
              </Draggable>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Planner
