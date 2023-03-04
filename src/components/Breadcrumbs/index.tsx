import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const pathnames = pathname.split('/').filter(Boolean)
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Spaceships</Link>
      </Breadcrumb.Item>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        return isLast ? (
          <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={path}>
            <Link to={routeTo}>{path}</Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default Breadcrumbs
