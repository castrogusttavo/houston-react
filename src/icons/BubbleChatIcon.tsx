import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatIcon({
  iconName = 'bubble-chat',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
