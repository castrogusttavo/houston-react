import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BandageIcon({ iconName = 'bandage', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
