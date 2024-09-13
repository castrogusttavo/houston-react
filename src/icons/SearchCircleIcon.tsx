import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchCircleIcon({
  iconName = 'search-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
