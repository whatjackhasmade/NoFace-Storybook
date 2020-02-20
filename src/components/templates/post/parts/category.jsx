import React from "react"

import StyledCategory from "./category.styles"

import Link from "@atoms/link/link"

const Category = ({ archiveURL = `/blog`, category = `uncategorised` }) => (
  <StyledCategory className="category">
    <div className="category__contents">
      <nav>
        <Link href={archiveURL}>Chronicles</Link>
        <span>/</span>
        <Link href={`/category/${category}`}>{category}</Link>
      </nav>
    </div>
  </StyledCategory>
)

export default Category
