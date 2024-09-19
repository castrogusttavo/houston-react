import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StudentIconIcon({ iconName = 'student-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
