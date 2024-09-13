import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SingLeftIcon({ iconName = 'sing-left', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
