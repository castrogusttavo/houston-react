import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PensiveIcon({ iconName = 'pensive', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
