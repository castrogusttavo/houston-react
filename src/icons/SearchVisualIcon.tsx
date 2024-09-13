import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchVisualIcon({
  iconName = 'search-visual',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
