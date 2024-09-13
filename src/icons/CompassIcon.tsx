import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CompassIcon({ iconName = 'compass', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
