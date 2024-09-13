import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchMinusIcon({
  iconName = 'search-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
