import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NotificationBubbleIcon({
  iconName = 'notification-bubble',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
