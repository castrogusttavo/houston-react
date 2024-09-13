import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MuteIcon({ iconName = 'mute', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
