import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShellfishIcon({ iconName = 'shellfish', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
