import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StepOutIcon({ iconName = 'step-out', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
