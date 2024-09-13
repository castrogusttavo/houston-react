import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserRoadsideIcon({
  iconName = 'user-roadside',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
