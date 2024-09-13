import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DigestionIcon({ iconName = 'digestion', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
