import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SdCardIcon({ iconName = 'sd-card', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
