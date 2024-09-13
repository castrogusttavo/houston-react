import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatUploadIcon({
  iconName = 'bubble-chat-upload',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
