import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StudentIcon({ iconName = 'student-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
