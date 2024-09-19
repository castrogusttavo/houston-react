import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TipsIcon({ iconName = 'tips-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
