import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageLock01Icon({
  iconName = 'message-lock-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
