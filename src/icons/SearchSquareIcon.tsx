import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchSquareIcon({
  iconName = 'search-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
