import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HoldPhoneIcon({
  iconName = 'hold-phone',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
