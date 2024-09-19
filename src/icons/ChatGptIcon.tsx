import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChatGptIcon({ iconName = 'chat-gpt', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
