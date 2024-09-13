import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserLock01Icon({
  iconName = 'user-lock-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
