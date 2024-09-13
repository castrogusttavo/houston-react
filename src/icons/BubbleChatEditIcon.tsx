import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatEditIcon({
  iconName = 'bubble-chat-edit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
