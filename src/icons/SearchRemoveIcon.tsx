import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchRemoveIcon({
  iconName = 'search-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
