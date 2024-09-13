import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatPreviewIcon({
  iconName = 'bubble-chat-preview',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
