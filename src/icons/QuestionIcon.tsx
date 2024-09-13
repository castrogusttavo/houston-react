import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QuestionIcon({ iconName = 'question', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
