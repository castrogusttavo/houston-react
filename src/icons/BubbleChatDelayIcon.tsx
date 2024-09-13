import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatDelayIcon({
  iconName = 'bubble-chat-delay',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
