import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PropertyViewIcon({
  iconName = 'property-view',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
