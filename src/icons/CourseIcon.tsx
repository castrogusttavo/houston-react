import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CourseIcon({ iconName = 'course', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
