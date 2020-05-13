import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    navLink: "/"
  },
  {
    id: "map",
    title: "Map",
    type: "item",
    // permissions: [] // TODO: what are the options here?
    navLink: "/map"
  },
  {
    id:"questionnaire",
    title:"Health Report",
    type:"item",
    navLink:"/health-report"
  }
]

export default navigationConfig
