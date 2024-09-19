import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShieldUserIcon({
  iconName = 'shield-user',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
