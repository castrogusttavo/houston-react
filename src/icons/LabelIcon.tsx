import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LabelIcon({ iconName = 'label', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
