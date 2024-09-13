import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PropertyEditIcon({
  iconName = 'property-edit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
