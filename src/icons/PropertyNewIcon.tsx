import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PropertyNewIcon({
  iconName = 'property-new',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
