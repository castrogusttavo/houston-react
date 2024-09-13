import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SlackIcon({ iconName = 'slack', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
