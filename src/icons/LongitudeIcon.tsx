import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LongitudeIcon({ iconName = 'longitude', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
