import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AcuteIcon({ iconName = 'acute', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
