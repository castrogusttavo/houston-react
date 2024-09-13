import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PassportExpiredIcon({
  iconName = 'passport-expired',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
