import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageNotification01Icon({
  iconName = 'message-notification-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
