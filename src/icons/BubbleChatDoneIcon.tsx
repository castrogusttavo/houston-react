import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatDoneIcon({
  iconName = 'bubble-chat-done',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
