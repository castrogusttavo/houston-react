import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JudgeIcon({ iconName = 'judge', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
