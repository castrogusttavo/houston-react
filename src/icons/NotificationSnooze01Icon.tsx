import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NotificationSnooze01Icon({
  iconName = 'notification-snooze-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
