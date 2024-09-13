import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallBlockedIcon({
  iconName = 'call-blocked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
