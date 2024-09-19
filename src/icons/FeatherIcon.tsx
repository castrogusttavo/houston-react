import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FeatherIcon({ iconName = 'feather', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
