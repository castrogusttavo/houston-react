import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SchoolIcon({ iconName = 'school', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
