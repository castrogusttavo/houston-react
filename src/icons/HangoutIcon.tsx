import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HangoutIcon({ iconName = 'hangout', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
