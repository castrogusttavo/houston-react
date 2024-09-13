import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TeacherIcon({ iconName = 'teacher', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
