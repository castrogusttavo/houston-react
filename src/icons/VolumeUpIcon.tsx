import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeUpIcon({ iconName = 'volume-up', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
