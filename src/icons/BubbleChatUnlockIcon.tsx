import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatUnlockIcon({
  iconName = 'bubble-chat-unlock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
