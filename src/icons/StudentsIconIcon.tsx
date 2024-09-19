import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StudentsIconIcon({ iconName = 'students-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
