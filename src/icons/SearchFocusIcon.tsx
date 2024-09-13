import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchFocusIcon({
  iconName = 'search-focus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
