import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LastFmIcon({ iconName = 'last-fm', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
