import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OkFingerIcon({ iconName = 'ok-finger', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
