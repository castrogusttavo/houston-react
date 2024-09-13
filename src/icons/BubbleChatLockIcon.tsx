import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatLockIcon({
  iconName = 'bubble-chat-lock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
