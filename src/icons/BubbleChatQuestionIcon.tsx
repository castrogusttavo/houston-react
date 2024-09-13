import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatQuestionIcon({
  iconName = 'bubble-chat-question',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
