import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StepIntoIcon({ iconName = 'step-into', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
