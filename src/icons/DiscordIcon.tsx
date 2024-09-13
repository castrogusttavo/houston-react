import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiscordIcon({ iconName = 'discord', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
