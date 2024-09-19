import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TulipIconIcon({ iconName = 'tulip-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
