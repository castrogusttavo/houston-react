import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeadsetIcon({ iconName = 'headset', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
