import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VimeoIcon({ iconName = 'vimeo', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
