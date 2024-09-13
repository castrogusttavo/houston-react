import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchAreaIcon({
  iconName = 'search-area',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
