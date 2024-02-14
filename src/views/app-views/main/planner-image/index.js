import React from "react"
import { Col, Card, Image } from "antd"

const PlannerImage = (e) => {
  const { Meta } = Card
  console.log(e.e)
  return (
    <Col span={5}>
      <Card>
        <Image src={e.e.image} preview={false} height={100} />
        <Meta title={e.e.name} />
      </Card>
    </Col>
  )
}

export default PlannerImage
