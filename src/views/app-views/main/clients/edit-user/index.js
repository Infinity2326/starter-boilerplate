import React from "react"
import User from "../user"

const EditUser = (props) => {
  return <User param={props.match.params} />
}

export default EditUser
