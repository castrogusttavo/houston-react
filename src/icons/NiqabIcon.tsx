import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NiqabIcon({ iconName = 'niqab', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
