import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageLock02Icon({
  iconName = 'message-lock-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
