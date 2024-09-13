import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ProfitIcon({ iconName = 'profit', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
