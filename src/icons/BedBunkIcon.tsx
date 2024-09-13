import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BedBunkIcon({ iconName = 'bed-bunk', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
