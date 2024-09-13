import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Notification03Icon({
  iconName = 'notification-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
