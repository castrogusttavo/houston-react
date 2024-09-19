import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TipsIcon({ iconName = 'tips', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
