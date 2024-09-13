import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatNotificationIcon({
  iconName = 'bubble-chat-notification',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
