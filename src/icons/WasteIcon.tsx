import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WasteIcon({ iconName = 'waste', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
