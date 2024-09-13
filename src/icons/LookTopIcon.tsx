import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LookTopIcon({ iconName = 'look-top', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
