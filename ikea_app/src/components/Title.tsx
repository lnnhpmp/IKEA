import * as React from 'react'

type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return <h1>{title.toUpperCase()}</h1>
}

export default Title
