import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MentorIcon({ iconName = 'mentor', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
