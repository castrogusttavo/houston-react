import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LabsIcon({ iconName = 'labs', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
