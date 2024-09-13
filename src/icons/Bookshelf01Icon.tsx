import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bookshelf01Icon({
  iconName = 'bookshelf-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
