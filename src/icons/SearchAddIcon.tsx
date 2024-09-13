import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchAddIcon({
  iconName = 'search-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
