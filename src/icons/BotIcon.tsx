import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BotIcon({ iconName = 'bot', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
