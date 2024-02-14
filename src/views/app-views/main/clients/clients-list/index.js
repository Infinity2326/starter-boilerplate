import React, { useEffect } from "react"
import { Card, Table } from "antd"
import moment from "moment"
import AvatarStatus from "components/shared-components/AvatarStatus"
import Loading from "components/shared-components/Loading"
import { getUsers } from "redux/actions/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { EyeOutlined } from "@ant-design/icons"
import Flex from "components/shared-components/Flex"

const ClientsList = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getUsers(json)))
  }, [dispatch])
  const users = useSelector((store) => store.auth.users)

  const viewDetails = (row) => {
    history.push(`/app/main/clients/${row.id}`)
  }

  const tableColumns = [
    {
      title: "Имя",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record.img}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase()
          b = b.name.toLowerCase()
          return a > b ? -1 : b > a ? 1 : 0
        },
      },
    },
    {
      title: "Город",
      dataIndex: "city",
      render: (_, record) => (
        <div className="d-flex">{record.address.city}</div>
      ),
      sorter: {
        compare: (a, b) => a.role.length - b.role.length,
      },
    },
    {
      title: "Сайт",
      dataIndex: "website",
      render: (_, record) => <div className="d-flex">{record.website}</div>,
      sorter: (a, b) =>
        moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
    },
    {
      title: "Компания",
      dataIndex: "company",
      render: (_, record) => (
        <div className="d-flex">{record.company.name}</div>
      ),
      sorter: {
        compare: (a, b) => a.status.length - b.status.length,
      },
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div
          className="text-right"
          style={{ cursor: "pointer" }}
          onClick={() => viewDetails(elm)}
        >
          <Flex alignItems="center">
            <EyeOutlined />
            <span className="ml-2">View Details</span>
          </Flex>
        </div>
      ),
    },
  ]
  return (
    <Card bodyStyle={{ padding: "0px" }}>
      {users[0]?.id ? (
        <Table columns={tableColumns} dataSource={users} rowKey="id" />
      ) : (
        <Loading cover="content" />
      )}
    </Card>
  )
}

export default ClientsList
