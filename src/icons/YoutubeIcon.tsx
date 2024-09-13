import React from 'react'
import { Icon, IconProps } from '../Icon'

export function YoutubeIcon({ iconName = 'youtube', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
