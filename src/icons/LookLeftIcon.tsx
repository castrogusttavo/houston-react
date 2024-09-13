import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LookLeftIcon({ iconName = 'look-left', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
