import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatOutcomeIcon({
  iconName = 'bubble-chat-outcome',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
