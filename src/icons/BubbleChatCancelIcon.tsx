import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatCancelIcon({
  iconName = 'bubble-chat-cancel',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
