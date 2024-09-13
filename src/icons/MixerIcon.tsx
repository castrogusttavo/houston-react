import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MixerIcon({ iconName = 'mixer', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
