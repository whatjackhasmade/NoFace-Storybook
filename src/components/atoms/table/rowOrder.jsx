import React from "react"
import { prettyDateTime } from "helpers"

import Badge from "atoms/badge/badge"
import Link from "atoms/link/link"

const RowOrder = ({ order, view }) => {
  const { createdAt, datetime, postcode, contactName, artist, id } = order

  const status = order?.status?.value

  return (
    <tr>
      <td>
        <Badge status={status}>{status}</Badge>
      </td>
      {view === `admin` && <td>{prettyDateTime(createdAt)}</td>}
      <td>{prettyDateTime(datetime)}</td>
      <td>{postcode}</td>
      <td>{contactName}</td>
      {view === `admin` && <td>{artist.email}</td>}
      <td>
        <Link
          href={
            view === `artist`
              ? `/dashboard/booking/request?id=${id}`
              : `order?id=${id}`
          }
          key={id}
        >
          Manage Request
        </Link>
      </td>
    </tr>
  )
}

export default RowOrder
