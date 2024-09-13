import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PropertySearchIcon({
  iconName = 'property-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
