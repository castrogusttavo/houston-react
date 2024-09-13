import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatSearchIcon({
  iconName = 'bubble-chat-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
