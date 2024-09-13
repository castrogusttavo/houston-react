import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatSecureIcon({
  iconName = 'bubble-chat-secure',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
