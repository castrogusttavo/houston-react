import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NotificationBlock01Icon({
  iconName = 'notification-block-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
