import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GuestHouseIcon({
  iconName = 'guest-house',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
