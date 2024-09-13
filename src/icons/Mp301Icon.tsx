import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mp301Icon({ iconName = 'mp3-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
