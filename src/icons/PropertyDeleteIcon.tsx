import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PropertyDeleteIcon({
  iconName = 'property-delete',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
