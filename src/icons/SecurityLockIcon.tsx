import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecurityLockIcon({
  iconName = 'security-lock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
