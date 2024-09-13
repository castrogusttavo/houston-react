import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchDollarIcon({
  iconName = 'search-dollar',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
