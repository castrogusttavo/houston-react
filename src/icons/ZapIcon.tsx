import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZapIcon({ iconName = 'zap', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
