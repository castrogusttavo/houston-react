import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockPasswordIcon({
  iconName = 'lock-password',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
