import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BrandfetchIcon({
  iconName = 'brandfetch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
