import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StepOverIcon({ iconName = 'step-over', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
